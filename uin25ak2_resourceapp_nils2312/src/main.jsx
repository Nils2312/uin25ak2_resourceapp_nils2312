/*
createRoot oppretter en reactapp og kobler den til HTML-elementet med id root
*/

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import "./styles.scss";

createRoot(document.getElementById('root')).render(
  <App />
);
