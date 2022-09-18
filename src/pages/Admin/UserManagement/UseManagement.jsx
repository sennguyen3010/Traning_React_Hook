import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalAction } from '../../../redux/reducers/modalReducer';
import CreateUser from './CreateUser';

export default function UseManagement() {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <button
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target={`#modal`}
        onClick={() => {
          const action = setModalAction({
            Component: CreateUser,
            title: 'create user',
          });
          dispatch(action);
        }}
      >
        Create user
      </button>
    </div>
  );
}
