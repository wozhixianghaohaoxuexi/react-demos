import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';

import App from './App';
import './assets/common.scss';

createRoot(document.getElementById('root')).render(<BrowserRouter>
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>
</BrowserRouter>);
