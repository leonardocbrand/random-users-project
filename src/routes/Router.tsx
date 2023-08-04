import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { CreateUserFormData } from '../pages/Login/schema';
import { NotFound } from '../pages/NotFound';

import Layout from '../components/Layout';

function Router() {
  const [user, setUser] = useState<CreateUserFormData>({} as CreateUserFormData);

  return (
    <Routes>
      <Route path='/' element={<Login setUser={ setUser } />} />
      <Route path='/' element={<Layout user={ user } />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default Router;
