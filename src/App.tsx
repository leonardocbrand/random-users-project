import { ToastContainer } from 'react-toastify';

import { QueryClientProvider } from '@tanstack/react-query';

import Router from './routes/Router';
import { queryClient } from './service/queryClient';

import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <ToastContainer theme='dark' position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
