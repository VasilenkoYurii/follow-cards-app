import { useSelector } from 'react-redux';
import { selectAlternativeChose } from 'redux/selectors';
import goItLogo from './imgForUserCard/GoItLogo.png';
import titlePicture from './imgForUserCard/titlePicture.png';
import woman from './imgForUserCard/woman.jpg';
import man from './imgForUserCard/man.jpg';

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
  AlterUserCardConainer,
  AlterTitleImg,
  AlterUserLogoContainer,
  AlterUserLogoImg,
  AlterUserNamePrg,
  AlterTweetsPrg,
  AlterFollowersPrg,
  AlterFollowButton,
  AlterLogo,
} from './UserCard.styled';

export const UserCard = ({
  userName,
  avatar,
  tweets,
  followers,
  following,
  handleFollow,
  gender,
}) => {
  const alternative = useSelector(selectAlternativeChose);

  return (
    <>
      {alternative ? (
        <AlterUserCardConainer>
          {gender === 'woman' && <AlterTitleImg src={woman} alt="woman" />}
          {gender === 'man' && <AlterTitleImg src={man} alt="woman" />}
          <AlterUserLogoContainer>
            <AlterUserLogoImg src={avatar} alt="user logo" />
          </AlterUserLogoContainer>
          <AlterUserNamePrg>{userName}</AlterUserNamePrg>
          <AlterTweetsPrg>
            Tweets: {tweets.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </AlterTweetsPrg>
          <AlterFollowersPrg>
            Followers:{' '}
            {following
              ? (followers + 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              : followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </AlterFollowersPrg>
          <AlterFollowButton
            bgColor={following ? '#ded9e3' : '#373737'}
            hoverBgColor={following ? '#373737' : '#ded9e3'}
            textColor={following ? '#373737' : '#ded9e3'}
            hoverTextColor={following ? '#ded9e3' : '#373737'}
            onClick={() => {
              handleFollow(userName);
            }}
          >
            {following ? 'Following' : 'Follow'}
          </AlterFollowButton>
          <AlterLogo>FRDS</AlterLogo>
        </AlterUserCardConainer>
      ) : (
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
            {following
              ? (followers + 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              : followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            Followers
          </FollowersPrg>
          <FollowButton
            bgColor={following ? '#5CD3A8' : '#ebd8ff'}
            hoverColor={following ? '#a5ffdfd6' : '#fff'}
            onClick={() => {
              handleFollow(userName);
            }}
          >
            {following ? 'Following' : 'Follow'}
          </FollowButton>
        </UserCardConainer>
      )}
    </>
  );
};
