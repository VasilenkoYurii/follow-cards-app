import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfiles } from 'redux/operations';
import { selectUsersProfiles } from 'redux/selectors';
import { BsArrowLeft } from 'react-icons/bs';

import {
  UsersProfilesList,
  LoadMoreBtn,
  UsersProfilesContainer,
  BackButton,
} from './TweetsPage.styled';
import { UserCard } from 'components/UserCard/UserCard';

export const TweetsPage = () => {
  const dispatch = useDispatch();
  const usersProfiles = useSelector(selectUsersProfiles);
  const [page, setPage] = useState(1);
  const [displayedProfiles, setDisplayedProfiles] = useState([]);
  const [followingUsers, setFollowingUsers] = useState(
    localStorage.getItem('followingUsers')
      ? JSON.parse(localStorage.getItem('followingUsers'))
      : []
  );

  const profilesPerPage = 3;

  useEffect(() => {
    dispatch(fetchUserProfiles());
  }, [dispatch]);

  useEffect(() => {
    const startIndex = (page - 1) * profilesPerPage;
    const endIndex = startIndex + profilesPerPage;
    const newDisplayedProfiles = usersProfiles
      .slice(0, endIndex)
      .map(userProfile => {
        if (followingUsers.includes(userProfile.user)) {
          return { ...userProfile, following: true };
        } else {
          return { ...userProfile, following: false };
        }
      });
    console.log(newDisplayedProfiles);
    setDisplayedProfiles(prevProfiles => [...newDisplayedProfiles]);
  }, [usersProfiles, page, followingUsers]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleFollow = userName => {
    setFollowingUsers(prevState => {
      let updatedFollowingUsers;
      if (prevState.includes(userName)) {
        updatedFollowingUsers = prevState.filter(user => user !== userName);
      } else {
        updatedFollowingUsers = [...prevState, userName];
      }
      localStorage.setItem(
        'followingUsers',
        JSON.stringify(updatedFollowingUsers)
      );
      return updatedFollowingUsers;
    });
  };

  return (
    <UsersProfilesContainer>
      <BackButton to="/">
        <BsArrowLeft width={20} height={20} />
        Back
      </BackButton>
      <UsersProfilesList>
        {displayedProfiles.map(userProfile => (
          <li key={userProfile.id}>
            <UserCard
              userName={userProfile.user}
              avatar={userProfile.avatar}
              tweets={userProfile.tweets}
              followers={userProfile.followers}
              following={userProfile.following}
              handleFollow={handleFollow}
            />
          </li>
        ))}
      </UsersProfilesList>

      {usersProfiles.length > displayedProfiles.length && (
        <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
      )}
    </UsersProfilesContainer>
  );
};
