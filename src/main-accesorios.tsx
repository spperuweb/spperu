import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AccesoriosPage from './pages/AccesoriosPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AccesoriosPage />
  </StrictMode>,
);
