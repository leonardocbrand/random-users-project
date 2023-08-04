import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { CreateUserFormData } from '../pages/Login/schema';

import NavMenu from './NavMenu';

type LayoutProps = {
  user: CreateUserFormData
}

function Layout({ user }: LayoutProps) {
  return (
    <Fragment>
      <NavMenu user={ user }/>
      <Outlet />
    </Fragment>
  );
}

export default Layout;
