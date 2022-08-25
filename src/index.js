import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseStateDemo from './pages/HooksDemo/UseStateDemo/UseStateDemo';
import UseEffectDemo from './pages/HooksDemo/UseEffectDemo/UseEffectDemo';
import UseCallBackDemo from './pages/HooksDemo/UseCallBackDemo/UseCallBackDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<App />}>
        <Route path="usestate" element={<UseStateDemo />}></Route>
        <Route path="useeffect" element={<UseEffectDemo />}></Route>
        <Route path="usecallback" element={<UseCallBackDemo />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
