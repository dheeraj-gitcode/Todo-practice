import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import {QueryClient , QueryClientProvider } from "@tanstack/react-query";
// import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);