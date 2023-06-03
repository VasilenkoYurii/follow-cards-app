import styled from '@emotion/styled';

export const UserCardConainer = styled.div`
  width: 380px;
  height: 460px;

  margin-top: 20px;

  background: linear-gradient(to right, #471ca9 0%, #5736a3 100%, #4b2a99 100%);
  box-shadow: -2.58px 6.87px 20.62px rgba(255, 254, 254, 0.73);
  border-radius: 20px;

  position: relative;

  display: flex;
  justify-content: center;
`;

export const CompanyLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const TitleImg = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
`;

export const UserLines = styled.div`
  position: absolute;
  top: 214px;

  width: 100%;
  height: 8px;

  background-color: #ebd8ff;

  box-shadow: inset 0px 3.44px 2.58px rgba(171, 123, 227, 0.5),
    0px 3.44px 3.44px rgba(0, 0, 0, 0.06),
    inset 0px -1.72px 3.44px rgba(254, 248, 255, 0.5);
`;

export const UserLogoContainer = styled.div`
  position: absolute;
  top: 186px;
  left: 158px;

  width: 64px;
  height: 64px;

  background: linear-gradient(to right, #471ca9 0%, #5736a3 100%, #4b2a99 100%);
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    border-radius: 50%;
    border-width: 8px;
    border-style: solid;
    border-color: #ebd8ff;
    box-shadow: inset 0px 3.44px 2.58px rgba(171, 123, 227, 0.5),
      0px 3.44px 3.44px rgba(0, 0, 0, 0.06),
      inset 0px -1.72px 3.44px rgba(254, 248, 255, 0.5);
  }
`;

export const UserLogoImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const UserNamePrg = styled.p`
  font-family: 'Montserrat';
  font-size: 22px;
  line-height: 24px;
  text-transform: uppercase;
  font-weight: 700;
  color: #ebd8ff;

  position: absolute;
  bottom: 170px;
`;

export const TweetsPrg = styled.p`
  font-family: 'Montserrat';
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  font-weight: 500;
  color: #ebd8ff;

  position: absolute;
  bottom: 142px;
`;

export const FollowersPrg = styled.p`
  font-family: 'Montserrat';
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  font-weight: 500;
  color: #ebd8ff;

  position: absolute;
  bottom: 112px;
`;

export const FollowButton = styled.p`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background-color: ${props => props.bgColor};
  cursor: pointer;
  /* 
  после подписки 
#5CD3A8 */

  width: 196px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 36px;

  transition: all 500ms;

  &:hover,
  &:focus {
    background-color: ${props => props.hoverColor};
  }
`;

export const AlterUserCardConainer = styled.div`
  width: 380px;
  height: 460px;

  margin-top: 20px;

  background: #fff;
  box-shadow: -2.58px 6.87px 20.62px rgba(255, 254, 254, 0.73);
  border-radius: 20px;

  position: relative;

  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

export const AlterTitleImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20px;

  position: absolute;
  top: 0;
  right: 0;
`;

export const AlterUserLogoContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 60px;
  width: 110px;
  height: 110px;
  background: linear-gradient(to right, #16141c 0%, #302e33 100%, #19171f 100%);
  border: 4px solid #373737;
`;

export const AlterUserLogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const AlterUserNamePrg = styled.p`
  font-family: 'Montserrat';
  font-size: 28px;
  line-height: 24px;
  text-transform: uppercase;
  font-weight: 500;
  color: #373737;
  position: absolute;
  bottom: 220px;
  left: 30px;
`;

export const AlterTweetsPrg = styled.p`
  font-family: 'Montserrat';
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  font-weight: 400;
  color: #373737;

  position: absolute;
  bottom: 160px;
  left: 30px;
`;

export const AlterFollowersPrg = styled.p`
  font-family: 'Montserrat';
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  font-weight: 400;
  color: #373737;

  position: absolute;
  bottom: 130px;
  left: 30px;
`;

export const AlterFollowButton = styled.p`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${props => props.textColor};
  background-color: ${props => props.bgColor};
  cursor: pointer;

  width: 196px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 36px;

  transition: all 500ms;

  &:hover,
  &:focus {
    background-color: ${props => props.hoverBgColor};
    color: ${props => props.hoverTextColor};
  }
`;

export const AlterLogo = styled.p`
  font-family: 'Montserrat';
  font-size: 18px;

  position: absolute;
  bottom: 5px;
  right: 10px;
`;
