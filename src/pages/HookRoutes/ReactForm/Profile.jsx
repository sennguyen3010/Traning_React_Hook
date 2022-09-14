import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProfileAPi } from '../../../redux/reducers/userReducer';
import moment from 'moment';

export default function Profile(props) {
  const { userLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = getProfileAPi();
    dispatch(action);
  }, []);

  const renderOrderHistory = () => {
    return userLogin.ordersHistory?.map((order, index) => {
      return (
        <div className="orderDetail" key={index}>
          <h3>Order detail {moment(order.date).format('MMMM Do YYYY, h:mm:ss a')}</h3>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>img</th>
                <th>price</th>
                <th>quantity</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody>
              {order.orderDetail.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <img src={item.image} width={50} alt="..." />
                    </td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price * item.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <h3>Profile</h3>
      <div className="d-flex">
        <div className="w-25">
          <div className="profile mt-5">
            <img src={userLogin.avatar} alt="..." height={200} />
            <div>email: {userLogin.email}</div>
            <div>name: {userLogin.name}</div>
          </div>
        </div>
        <div className="w-75">
          <h3>Thông tin đơn hàng</h3>
          <div className="row">{renderOrderHistory()}</div>
        </div>
      </div>
    </div>
  );
}
