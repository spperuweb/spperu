import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SD4PlusPage from './pages/SD4PlusPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SD4PlusPage />
  </StrictMode>,
);
