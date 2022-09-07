import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

let timeout = null;

export default function Search() {
  const [arrProduct, setArrProduct] = useState([]);
  // Đưa dữ liệu lên url: setSearchParams
  // Lấy dữ liệu từ url về: searchParams.get('tên params')
  let [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    //bước 4: khi người dùng gõ trên thanh search thì lấy gtri value gán vào thanh url
    const { value } = e.target;
    // khi người dùng gõ phím thì setSearchParams thực thi => dẫn đến function dc render lại để kích useEffect chạy
    setSearchParams({
      // làm thay đổi ?keyword trên url đồng thời kích useEffect chạy lần 2
      keyword: value,
    });
  };

  const getProductByKeywordApi = async () => {
    //call api (b2 -> gọi api sau lần đầu tiên load trang)
    try {
      if (searchParams.get('keyword') !== null) {
        const result = await axios({
          url: `https://shop.cyberlearn.vn/api/Product?keyword=${searchParams.get('keyword')}`,
          method: 'GET',
        });
        setArrProduct(result.data.content); //Bước 3: sau khi lấy api thành công về -> state thay đổi -> giao diện render lại (kết thúc lần 1)
        //Lần 2 (Bước 6)
        console.log(result.data.content);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    //Lần 1: (bước 1: khi load trang thì hàm này gọi api lần 1)
    // gọi api thực thi
    // lần 2: bước 5
    timeout = setTimeout(() => {
      getProductByKeywordApi();
    }, 1000);
    return () => {
      if (timeout !== null) {
        //kết quả clear sau khi gọi api
        clearTimeout(timeout); //Bước 7: clear
      }
    };
  }, [searchParams.get('keyword')]); //khi params trên url thay đổi thì hàm này kích hoạt

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Search</h3>
      <div className="form-group">
        <p>Nhập từ khoá</p>
        <div className="input-group-prepend">
          <input className="form-control" id="keyword" onChange={handleChange} />
          <button className="btn bg-dark text-white">Search</button>
        </div>
      </div>
      <div className="mt-2">
        <p>Kết quả tìm kiếm</p>
        <div className="row">
          {arrProduct.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card">
                  <img src={item.image} alt={'...'} />
                </div>
                <div className="card-body">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <button className="btn btn-success">View detail</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
}
