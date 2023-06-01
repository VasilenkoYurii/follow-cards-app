import goItLogo from './imgForUserCard/GoItLogo.png';
import titlePicture from './imgForUserCard/titlePicture.png';

import {
  UserCardConainer,
  CompanyLogo,
  TitleImg,
  UserLines,
  UserLogoContainer,
  UserLogoImg,
  TweetsPrg,
  FollowersPrg,
  FollowButton,
  UserNamePrg,
} from './UserCard.styled';

export const UserCard = ({ userName, avatar, tweets, followers }) => {
  return (
    <UserCardConainer>
      <CompanyLogo src={goItLogo} alt="Company logo" />
      <TitleImg src={titlePicture} alt="Title picture" />

      <UserLines></UserLines>
      <UserLogoContainer>
        <UserLogoImg src={avatar} alt="user logo" />
      </UserLogoContainer>

      <UserNamePrg>{userName}</UserNamePrg>
      <TweetsPrg>
        {tweets.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Tweets
      </TweetsPrg>
      <FollowersPrg>
        {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Followers
      </FollowersPrg>
      <FollowButton>Follow</FollowButton>
    </UserCardConainer>
  );
};
