import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import SwiperPage from './pages/SwiperPage';

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