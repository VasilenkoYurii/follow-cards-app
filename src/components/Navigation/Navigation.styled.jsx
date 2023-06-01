import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
`;

export const NavLinkStyled = styled(NavLink)`
  font-family: 'Montserrat';
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 400;

  color: white;

  transition: all 0.5s ease;

  &.active {
    color: white;
    border-bottom: 1px solid white;

    &:hover {
      color: #ebd8ff;
      border-bottom: 1px solid #ebd8ff;
    }
  }

  &:hover {
    color: #ebd8ff;
    border-bottom: 1px solid #ebd8ff;
  }
`;
