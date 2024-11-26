import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../public/LoginForm";
import Index from "./components/Index";



const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/index" element={<Index />} />
    </Routes>
  );
};

export default App;
