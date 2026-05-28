import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SD4Page from './pages/SD4Page.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SD4Page />
  </StrictMode>,
);
