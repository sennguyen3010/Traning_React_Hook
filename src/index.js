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
import UseMemoDemo from './pages/HooksDemo/UseMemoDemo/UseMemoDemo';
import UseRefDemo from './pages/HooksDemo/UseRefDemo/UseRefDemo';
//setup redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import DemoNumber from './pages/HooksDemo/UseRedux/DemoNumber/DemoNumber';
import { DemoFaceBookApp } from './pages/HooksDemo/UseRedux/DemoFaceBookApp/DemoFaceBookApp';
import ReactForm from './pages/HookRoutes/ReactForm/ReactForm';
import Profile from './pages/HookRoutes/ReactForm/Profile';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import DemoUseRoute from './pages/DemoUseRoute.jsx/DemoUseRoute';
import DemoAnimation from './pages/DemoAnimation/DemoAnimation';
import Login from './pages/Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail />}></Route>
          </Route>

          <Route path="usestate" element={<UseStateDemo />}></Route>
          <Route path="useeffect" element={<UseEffectDemo />}></Route>
          <Route path="usecallback" element={<UseCallBackDemo />}></Route>
          <Route path="usememo" element={<UseMemoDemo />}></Route>
          <Route path="useref" element={<UseRefDemo />}></Route>
          <Route path="reduxnumber" element={<DemoNumber />}></Route>
          <Route path="reduxfacebook" element={<DemoFaceBookApp />}></Route>
          <Route path="reactform" element={<ReactForm />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="customhook" element={<DemoUseRoute />}></Route>
          <Route path="animation" element={<DemoAnimation />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
