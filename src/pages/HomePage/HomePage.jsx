import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkPageUrl } from 'redux/operations';
import friendsImage from './imgForHomePage/friends.png';
import { HomeTitle, HomeTitleBox, FriendImage } from './HomePage.styled';

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkPageUrl());
  }, [dispatch]);

  return (
    <HomeTitleBox>
      <HomeTitle>Come. Subscribe. Be friends.</HomeTitle>

      <FriendImage src={friendsImage} alt="friends image" />
    </HomeTitleBox>
  );
};
