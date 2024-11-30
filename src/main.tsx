import { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from './App.tsx'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";





ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)