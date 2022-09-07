import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Home(props) {
  const [arrProduct, setArrProduct] = useState([]);

  const getApiProduct = async () => {
    try {
      let result = await axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
      });
      console.log('ket qua', result.data.content);

      //sau khi lay ket qua tu api ve dua vao state arrProduct
      setArrProduct(result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    //sau khi giao dien load xong thi goi api thuc thi
    getApiProduct();
  }, []);

  const renderProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-3 mt-2" key={index}>
          <div className="card">
            <img src={item.image} alt="..." />
            <div className="card-body bg-dark text-light">
              <p>{item.name}</p>
              <p>{item.price}</p>
              {/* <button className="btn btn-success">View detail</button> */}
              <NavLink to={`/detail/${item.id}`} className="btn btn-success">
                View datail
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <h3>Shoes app</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
