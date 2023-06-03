import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfiles } from 'redux/operations';
import { selectUsersProfiles } from 'redux/selectors';
import { BsArrowLeft } from 'react-icons/bs';

import Dropdown from 'react-bootstrap/Dropdown';

import {
  UsersProfilesList,
  LoadMoreBtn,
  UsersProfilesContainer,
  BackButton,
  DropdownTweets,
  DropdownTweetsMenu,
  DropdownTweetsContainer,
  UserChoiseContainer,
} from './TweetsPage.styled';
import { UserCard } from 'components/UserCard/UserCard';
import { AlternativeTogle } from 'components/AlternativeTogle/AlternativeTogle';

export const TweetsPage = () => {
  const dispatch = useDispatch();
  const usersProfiles = useSelector(selectUsersProfiles);
  const [page, setPage] = useState(1);
  const [displayedProfiles, setDisplayedProfiles] = useState([]);
  const [lengthForPaginetion, setLengthForPaginetion] = useState([]);
  const [followingUsers, setFollowingUsers] = useState(
    localStorage.getItem('followingUsers')
      ? JSON.parse(localStorage.getItem('followingUsers'))
      : []
  );
  const [activeItem, setActiveItem] = useState(null);
  const profilesPerPage = 3;
  const options = [
    { value: 'show all', label: 'show all' },
    { value: 'follow', label: 'Follow' },
    { value: 'followings', label: 'followings' },
  ];

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

    const newDisplayedProfilesForPag = usersProfiles.map(userProfile => {
      if (followingUsers.includes(userProfile.user)) {
        return { ...userProfile, following: true };
      } else {
        return { ...userProfile, following: false };
      }
    });

    if (activeItem && activeItem.value === 'follow') {
      const changedDisplayedProfiles = newDisplayedProfiles.filter(
        userProfile => userProfile.following === false
      );
      setLengthForPaginetion(prevState => [
        ...newDisplayedProfilesForPag.filter(
          userProfile => userProfile.following === false
        ),
      ]);
      setDisplayedProfiles(prevProfiles => [...changedDisplayedProfiles]);
      return;
    } else if (activeItem && activeItem.value === 'followings') {
      console.log('awd');
      const changedDisplayedProfiles = newDisplayedProfiles.filter(
        userProfile => userProfile.following === true
      );
      setLengthForPaginetion(prevState =>
        newDisplayedProfilesForPag.filter(
          userProfile => userProfile.following === true
        )
      );
      setDisplayedProfiles(prevProfiles => [...changedDisplayedProfiles]);
      return;
    } else {
      setLengthForPaginetion(prevState => newDisplayedProfilesForPag);
      setDisplayedProfiles(prevProfiles => [...newDisplayedProfiles]);
    }
  }, [usersProfiles, page, followingUsers, activeItem]);

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

  const handleItemClick = item => {
    setActiveItem(item);
  };
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <UsersProfilesContainer>
      <BackButton to="/">
        <BsArrowLeft width={20} height={20} />
        Back
      </BackButton>

      <UserChoiseContainer>
        <AlternativeTogle />
      </UserChoiseContainer>

      <DropdownTweetsContainer>
        <DropdownTweets
          id="dropdown-button-dark-example2"
          variant="secondary"
          title="Dropdown button"
          className="mt-2"
        >
          {activeItem ? activeItem.label : 'Select an option'}{' '}
        </DropdownTweets>

        <DropdownTweetsMenu variant="dark">
          {options.map(item => (
            <Dropdown.Item
              key={item.value}
              href={`#/action-${item.value}`}
              className={activeItem === item ? 'custom-active-item' : ''}
              onClick={() => handleItemClick(item)}
            >
              {item.label}
            </Dropdown.Item>
          ))}
        </DropdownTweetsMenu>
      </DropdownTweetsContainer>

      <UsersProfilesList>
        {displayedProfiles.map(userProfile => (
          <li key={userProfile.id}>
            <UserCard
              userName={userProfile.user}
              avatar={userProfile.avatar}
              tweets={userProfile.tweets}
              followers={userProfile.followers}
              following={userProfile.following}
              gender={userProfile.gender}
              handleFollow={handleFollow}
            />
          </li>
        ))}
      </UsersProfilesList>

      {lengthForPaginetion.length > displayedProfiles.length && (
        <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
      )}
    </UsersProfilesContainer>
  );
};
