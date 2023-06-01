import friendsImage from './imgForHomePage/friends.png';
import { HomeTitle, HomeTitleBox, FriendImage } from './HomePage.styled';

export const HomePage = () => {
  return (
    <HomeTitleBox>
      <HomeTitle>Come. Subscribe. Be friends.</HomeTitle>

      <FriendImage src={friendsImage} alt="friends image" />
    </HomeTitleBox>
  );
};
