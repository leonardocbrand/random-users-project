import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import PageDetails from './pages/PageDetails';

import Layout from './components/Layout';

function App() {

  return (
    <Routes>
      <Route path='/login' Component={Login} />
      <Route path='/' Component={Layout}>
        <Route path='/dashboard' Component={Dashboard} />
        <Route path='/details/:id' Component={PageDetails} />
      </Route>
      <Route path='*' Component={NotFound} />
    </Routes>
  );
}

export default App;
