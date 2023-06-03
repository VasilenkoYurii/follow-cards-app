import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { OutletBox } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense>
        <OutletBox>
          <Outlet />
        </OutletBox>
      </Suspense>
    </>
  );
};
