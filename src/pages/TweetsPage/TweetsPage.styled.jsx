import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

export const UsersProfilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled(Link)`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background-color: #fff;
  cursor: pointer;
  width: 100px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  position: absolute;
  top: 80px;
  left: 100px;

  box-shadow: -0.58px -0.13px 8.62px 3px rgba(255, 254, 254, 0.5);

  transition: all 500ms;

  &:hover,
  &:focus {
    background-color: #5c636a;
    color: #fff;
  }
`;

export const UsersProfilesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 1200px;
`;

export const LoadMoreBtn = styled.button`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background-color: #fff;
  cursor: pointer;

  width: 200px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 10px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 30px;
  margin-top: 50px;

  box-shadow: -0.58px -0.13px 8.62px 3px rgba(255, 254, 254, 0.5);

  transition: all 500ms;

  &:hover,
  &:focus {
    background-color: #5c636a;
    color: #fff;
  }
`;

export const DropdownTweetsContainer = styled(Dropdown)`
  margin-bottom: 20px;
`;

export const DropdownTweets = styled(Dropdown.Toggle)`
  width: 400px;

  font-family: 'Montserrat';

  color: #373737;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;
  box-shadow: -0.58px -0.13px 8.62px 3px rgba(255, 254, 254, 0.5);

  transition: all 500ms;
`;

export const DropdownTweetsMenu = styled(Dropdown.Menu)`
  width: 400px;
  font-family: 'Montserrat';
  text-transform: uppercase;
  &:hover {
  }
`;

export const UserChoiseContainer = styled.div`
  position: absolute;
  right: 100px;
  top: 80px;
`;
