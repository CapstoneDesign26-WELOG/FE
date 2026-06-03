import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import queryClient from './shared/libs/query-client';
import { router } from './shared/routes/router';
import { useNotificationStream } from './shared/hooks/use-notification-stream';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppContent = () => {
  useNotificationStream();
  return <RouterProvider router={router} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppContent />
    <ReactQueryDevtools initialIsOpen={false} />
    <ToastContainer
      position="bottom-center"
      autoClose={3000}
      hideProgressBar
      closeButton={false}
      style={{
        bottom: '8rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 3.2rem)',
        maxWidth: '39.8rem',
      }}
      toastStyle={{
        width: '100%',
        minHeight: 'auto',
        marginBottom: 0,
        borderRadius: '12px',
        padding: '1.2rem 1.6rem',
        fontSize: '1.4rem',
        textAlign: 'center',
      }}
    />
  </QueryClientProvider>
);

export default App;
