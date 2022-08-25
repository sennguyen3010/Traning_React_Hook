import React from 'react';
import { memo } from 'react';

function Comment(props) {
  console.log('comment');
  return (
    <div>
      <div>
        {props.renderLike()}
        <br />
        <textarea className="w-50 form-control"></textarea> <br />
        <button>Gửi</button>
      </div>
    </div>
  );
}

export default memo(Comment);
