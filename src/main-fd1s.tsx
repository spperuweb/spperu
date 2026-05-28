import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FD1SPage from './pages/FD1SPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FD1SPage />
  </StrictMode>,
);
