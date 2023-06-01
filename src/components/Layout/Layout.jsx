import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { OutletBox } from './Layout.styled';
// import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <AppBar />
      {/* <Suspense fallback={<Loader />}> */}
      <Suspense>
        <OutletBox>
          <Outlet />
        </OutletBox>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
