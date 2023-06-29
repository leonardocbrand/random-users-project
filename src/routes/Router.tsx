import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

import Layout from '../components/Layout';

function Router() {
  return (
    <Routes>
      <Route path='/' Component={Login} />
      <Route path='/' Component={Layout}>
        <Route path='/dashboard' Component={Dashboard} />
      </Route>
      <Route path='*' Component={NotFound} />
    </Routes>
  );
}

export default Router;
