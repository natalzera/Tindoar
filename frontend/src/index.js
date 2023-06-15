import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// renderiza a aplicação na div indicada do html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);