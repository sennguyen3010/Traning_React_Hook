import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

let timeout = {};

export default function UseEffectDemo() {
  const [arrProduct, setArrProduct] = useState([]);
  const [count, setCount] = useState(60);

  const getApi = () => {
    let promise = axios({
      url: 'https://shop.cyberlearn.vn/api/Product',
      method: 'GET',
    });

    promise.then((result) => {
      console.log('Kết quả:', result.data.content);
      setArrProduct(result.data.content);
    });

    promise.catch((err) => {
      console.log({ err });
    });
  };

  const renderProduct = () => {
    console.log(arrProduct);
    return arrProduct.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <img className="w-100" src={item.image} alt="product" />
          <div
            className="card-body bg-dark text-white"
            style={{
              height: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'end',
            }}
          >
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button className="btn btn-success">Add to cart</button>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    //callback function này sẽ chạy 1 lần đầu tiên và các lần sau thì phụ thuộc vào dependency thứ 2 của hàm useEffect(giống Didupdate)
    //khi nào count thay đổi thì mới chạy hàm callback này tiếp còn state khác thay đổi thì hàm này ko chạy nhé
  }, [count]);

  useEffect(() => {
    //chạy 1 lần sau render giống componentDidMount bên class component
    getApi();

    timeout = setInterval(() => {
      setCount((count) => {
        return count - 1;
      });
      console.log('123');
    }, 1000);

    return () => {
      //function return trong useEffect sẽ dc kích hoạt trc khi component này mất khỏi giao diện giống componentWillUnmout bên react class
      clearInterval(timeout);
    };
  }, []);

  return (
    <div className="container">
      <h4>ComponentWillunmount</h4>
      <p>Count: {count}</p>
      <h3>UseEffectDemo</h3>
      <h4>ComponentDidMount (sử dụng load 1 lần sau render (call API))</h4>
      <hr />
      <h3>Shoes shop</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
