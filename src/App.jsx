import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import queryClient from './shared/libs/query-client';
import { router } from './shared/routes/router';
import { useNotificationStream } from './shared/hooks/use-notification-stream';

const AppContent = () => {
  useNotificationStream();
  return <RouterProvider router={router} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppContent />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;