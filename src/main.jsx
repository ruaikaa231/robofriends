import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Card from './Card.jsx';
import App from './App';
import 'tachyons';
import { robots } from './robots';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
