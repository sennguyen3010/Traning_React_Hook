import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

/**
 useRef: tương tự useState tuy nhiên khi thay đổi giá trị useRef component không render lại (useRef dùng để lưu giá trị sau mỗi lần render)
 useRef thường sử dụng cho các form không có validation, hoặc load dữ liệu chỉnh sửa
 */

export default function UseRefDemo() {
  //   const [userLogin, setUserLogin] = useState({ username: '', password: '' });

  //   console.log(userLogin);

  // let userLogin = { username: '', password: ''}

  const userLoginRef = useRef({ username: '', password: '' });
  console.log('render');

  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    userLoginRef.current[id] = value;
    console.log(userLoginRef.current);
    //   console.log(userLogin);

    // setUserLogin({
    //   ...userLogin,
    //   [id]: value,
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userLoginRef.current);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>username</p>
        <input
          className="form-control"
          id="username"
          onChange={handleChangeInput}
        />
      </div>
      <div className="form-group">
        <p>password</p>
        <input
          className="form-control"
          id="password"
          type="password"
          onChange={handleChangeInput}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </div>
    </form>
  );
}
