import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfiles } from 'redux/operations';
import { selectUsersProfiles } from 'redux/selectors';

import {
  UsersProfilesList,
  LoadMoreBtn,
  UsersProfilesContainer,
} from './TweetsPage.styled';
import { UserCard } from 'components/UserCard/UserCard';

export const TweetsPage = () => {
  const dispatch = useDispatch();
  const usersProfiles = useSelector(selectUsersProfiles);
  const [page, setPage] = useState(1);
  const [displayedProfiles, setDisplayedProfiles] = useState([]);

  const profilesPerPage = 3;

  useEffect(() => {
    dispatch(fetchUserProfiles());
  }, [dispatch]);

  useEffect(() => {
    const startIndex = (page - 1) * profilesPerPage;
    const endIndex = startIndex + profilesPerPage;
    const newDisplayedProfiles = usersProfiles.slice(0, endIndex);
    console.log(newDisplayedProfiles);
    setDisplayedProfiles(prevProfiles => [...newDisplayedProfiles]);
  }, [usersProfiles, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <UsersProfilesContainer>
      <UsersProfilesList>
        {displayedProfiles.map(userProfile => (
          <li key={userProfile.id}>
            <UserCard
              userName={userProfile.name}
              avatar={userProfile.avatar}
              tweets={userProfile.tweets}
              followers={userProfile.followers}
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
