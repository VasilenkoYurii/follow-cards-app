import { useSelector } from 'react-redux';
import { selectAlternative } from 'redux/selectors';
import { Navigation } from 'components/Navigation/Navigation';
import { AppBarContainer, TitleLogo } from './AppBar.styled';

export const AppBar = () => {
  const alternative = useSelector(selectAlternative);

  return (
    <AppBarContainer>
      <TitleLogo>FRDS</TitleLogo>
      <Navigation />
      {alternative && <div>adwawd</div>}
    </AppBarContainer>
  );
};
