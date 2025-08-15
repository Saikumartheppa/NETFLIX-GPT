import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TITLE_BAR_ICON } from '../utils/constants.js';

const link = document.createElement('link');
link.rel = 'icon';
document.head.appendChild(link);
link.href = TITLE_BAR_ICON;
const root = createRoot(document.getElementById('root'))
root.render(
    <App />
);
