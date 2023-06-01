import { Nav, NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/tweets">Tweets</NavLinkStyled>
    </Nav>
  );
};
