import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import Comment from './Comment';

export default function UseCallBackDemo() {
  const [like, setLike] = useState(1);
  const [number, setNumber] = useState(1);

  const renderLike = () => {
    return <p>Bạn đã thả {like}</p>;
  };

  //hàm useCallBack sẽ cache lại hàm renderlike sau mỗi lần setState render, chỉ tạo mới hàm renderLike khi like thay đổi
  const renderLikeCallBack = useCallback(renderLike, [like]);

  return (
    <div className="container">
      <div className="m-5">
        Like: {like} ♥ - member: {number}{' '}
        <button
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          +
        </button>
        <br />
        <span
          style={{ cursor: 'pointer', color: 'red', fontSize: 35 }}
          onClick={() => {
            setLike(like + 1);
          }}
        >
          ♥
        </span>
        <br />
        <br />
        <Comment renderLike={renderLikeCallBack} />
      </div>
    </div>
  );
}
