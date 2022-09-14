import React, { useEffect, useState } from 'react';
import useRoutes from '../../hooks/useRoutes';
import { useCookie } from 'react-use';
import useCookieCustom from '../../hooks/useCookie';

export default function DemoUseRoute() {
  const {
    navigate,
    params,
    searchParams: [search, setSearch],
  } = useRoutes();

  const [setCookie, getCookie] = useCookieCustom('my-cookie', '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    console.log(username, password);

    setCookie(username, 30);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Login cookie</h3>
      <div className="form-group">
        <p>Nhập vào username</p>
        <input className="form-control" id="username" />
      </div>
      <div className="form-group">
        <p>Nhập vào password</p>
        <input className="form-control" id="password" type={'password'} />
      </div>
      <div className="form-group">
        <button className="btn btn-success" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
