import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FD2Page from './pages/FD2Page.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FD2Page />
  </StrictMode>,
);
