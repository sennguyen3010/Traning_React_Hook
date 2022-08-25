import React, { useState } from 'react';

export default function DemoChonXe() {
  const [car, setCar] = useState('./img/products/black-car.jpg');

  const changeCar = (color) => {
    setCar(`./img/products/${color}-car.jpg`);
  };

  return (
    <div>
      <h3>Demo chọn xe</h3>
      <div className="row">
        <div className="col-6">
          <img src={car} alt="car" className="w-100" />
        </div>
        <div className="col-6">
          <button
            className="btn mx-2"
            style={{ background: 'red', color: '#fff' }}
            onClick={() => {
              changeCar('red');
            }}
          >
            Red
          </button>
          <button
            className="btn mx-2"
            style={{ background: 'black', color: '#fff' }}
            onClick={() => {
              changeCar('black');
            }}
          >
            black
          </button>
          <button
            className="btn mx-2"
            style={{ background: 'silver', color: '#fff' }}
            onClick={() => {
              changeCar('silver');
            }}
          >
            silver
          </button>
          <button
            className="btn mx-2"
            style={{ background: '#eee', color: '#fff' }}
            onClick={() => {
              changeCar('steel');
            }}
          >
            steel
          </button>
        </div>
      </div>
    </div>
  );
}
