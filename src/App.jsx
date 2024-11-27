import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import { lazy } from 'react';

const SwiperPage = lazy(() => import('./pages/SwiperPage'));

const routes = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/swiper',
        element: <SwiperPage />
      }
    ]
  }
];

function App() {
  return useRoutes(routes);
}

export default App;