import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { changeNumber } from '../../../../redux/reducers/numberReducer';

export default function DemoNumber(props) {
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h3>Number: {number}</h3>
      <button
        className="btn btn-success"
        onClick={() => {
          //tự tạo action để dispatch reducer slice
          //cách 1: tự tạo action
          //   const action = {
          //     type: 'numberReducer/changeNumber',
          //     payload: number + 1,
          //   };
          //   dispatch(action);

          //cách 2: action creator
          const action = changeNumber(number + 1);
          // {
          //     type: 'numberReducer/changeNumber',
          //     payload: number + 1,
          // }
          dispatch(action);
        }}
      >
        +
      </button>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   number: state.number,
// });

// export default connect(mapStateToProps)(DemoNumber);
