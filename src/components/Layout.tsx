import { FC, Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import NavMenu from './NavMenu';

const Layout: FC = () => {
  return (
    <Fragment>
      <NavMenu />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
