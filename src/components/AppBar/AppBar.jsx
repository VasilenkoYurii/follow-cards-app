import { Navigation } from 'components/Navigation/Navigation';
import { AppBarContainer, TitleLogo } from './AppBar.styled';

export const AppBar = () => {
  return (
    <AppBarContainer>
      <TitleLogo>FRDS</TitleLogo>
      <Navigation />
    </AppBarContainer>
  );
};
