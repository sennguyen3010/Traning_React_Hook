import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

export default function Detail(props) {
  const [productDetail, setProductDetail] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const getProductDetailApi = async () => {
    try {
      let result = await axios({
        url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id=' + params.id,
        method: 'GET',
      });
      console.log('ket qua', result.data.content);

      //sau khi lay ket qua tu api ve dua vao state arrProduct
      setProductDetail(result.data.content);
      console.log(productDetail);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // chay 2 truong hop: lan dau tien load page, va khi param.id thay doi thi ham nay se chay
    getProductDetailApi();
  }, [params.id]);

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-4">
          <img className="w-100" src={productDetail.image} alt="..." />
        </div>
        <div className="col-8">
          <h3>{productDetail.name}</h3>
          <p>{productDetail.description}</p>
          <button className="btn btn-success">Add to cart</button>
        </div>

        <div className="mt-2">
          <h3>Related product</h3>
          <div className="row">
            {/* ?: toan tu optional chaining: neu co thuoc tinh do thi moi cham tiep phuong thuc or thuoc tinh tiep theo duoc, ko thi bo qua */}
            {productDetail.relatedProducts?.map((item, index) => {
              return (
                <div className="col-3" key={index}>
                  <div className="card">
                    <img
                      src={item.image}
                      style={{ objectFit: 'cover' }}
                      height={200}
                      className="w-100"
                      alt=""
                    />
                    <div className="card-body">
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                      <NavLink
                        className="btn btn-success"
                        to={`/detail/${item.id}`}
                      >
                        View detail
                      </NavLink>
                      <button
                        className="btn btn-secondary mx-2"
                        onClick={() => {
                          navigate(`/detail/${item.id}`);
                        }}
                      >
                        View detail
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
