import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FD3Page from './pages/FD3Page.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FD3Page />
  </StrictMode>,
);
