import styled from '@emotion/styled';

export const UsersProfilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  background-color: #ebd8ff;
  cursor: pointer;

  width: 200px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 30px;
  margin-top: 50px;

  transition: all 500ms;

  &:hover,
  &:focus {
    background-color: #fff;
  }
`;
