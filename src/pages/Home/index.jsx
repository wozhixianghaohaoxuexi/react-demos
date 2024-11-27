import { Outlet, useNavigate } from 'react-router-dom';

import './index.scss';

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className="Home">
      <div className="Home-sider">
        <div className="Home-sider-item" onClick={() => navigate('/swiper')}>swiper</div>
      </div>
      <div className="Home-content">
        <Outlet />
      </div>
    </div>
  );
}