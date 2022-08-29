//rafc: ko Hỗ trợ con trỏ this

import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../../redux/reducers/facebookReducer';

export const DemoFaceBookApp = (props) => {
  const { arrComment } = useSelector((state) => state.facebookReducer);
  //   console.log(arrComment);
  const userComment = useRef({ name: '', content: '' });
  const dispatch = useDispatch();

  const renderComment = () => {
    return arrComment.map((comment, index) => {
      return (
        <div className="d-flex" key={index}>
          <div className="avartar" style={{ width: 50 }}>
            <img
              style={{ display: 'block' }}
              src={`https://i.pravatar.cc?u=${comment.name}`}
              alt="avatar"
              className="w-100"
            />
          </div>
          <div className="content mx-2">
            <h5 className="text-danger">{comment.name}</h5>
            <p>{comment.content}</p>
          </div>
        </div>
      );
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    userComment.current[id] = value;
    // console.log(id, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newComment = { ...userComment.current };

    const action = addComment(newComment);
    /**
     type: 'facebookReducer/addComment',
     payload: { name: 'a', content: 'abc' }
     
     */
    dispatch(action);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Demo facebook app</h3>
      <div className="card">
        <div className="card-header">{renderComment()}</div>

        <div className="card-body">
          <div className="form-group">
            <p>name</p>
            <input className="form-control" id="name" onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>content</p>
            <input
              className="form-control"
              id="content"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-success">Send</button>
          </div>
        </div>
      </div>
    </form>
  );
};
