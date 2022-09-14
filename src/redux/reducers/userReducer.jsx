import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ACCESS_TOKEN, getStore, getStoreJSON, setCookie, setStore, setStoreJSON, USER_LOGIN } from '../../util/config';

const initialState = {
  userLogin: getStoreJSON(USER_LOGIN),
};

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserLoginAction: (state, action) => {
      let userLogin = action.payload;
      state.userLogin = userLogin;
      //state.userLogin.email = email
    },
  },
});

export const { setUserLoginAction } = userReducer.actions;

export default userReducer.reducer;

//---------------- action thunk -------------------
export const signinApi = (userLogin) => {
  //userLogin = {email:'', password:''}

  return async (dispatch) => {
    try {
      let result = await axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signin',
        method: 'POST',
        data: userLogin,
      });

      //thanh cong
      //lưu lại token
      //localStorage.setItem
      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      setCookie(result.data.content.accessToken, 30, ACCESS_TOKEN);
      //lưu lại email
      setStoreJSON(USER_LOGIN, result.data.content);

      //   console.log(result);
      //đưa lên userLogin thành công lên reducer
      //result.data.content = {email:'', accessToken: ''}
      const action = setUserLoginAction(result.data.content);

      dispatch(action);
    } catch (err) {
      console.log({ err });
    }
  };
};

//call api getProfile
export const getProfileAPi = () => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: 'https://shop.cyberlearn.vn/api/Users/getProfile',
        method: 'POST',
        //data : 'dữ liệu người dùng nhập, chọn, thay đổi'
        headers: {
          Authorization: `Bearer ${getStore(ACCESS_TOKEN)}`,
        },
      });
      console.log('ket qua', result.data.content);
      //Tạo actioncreator => dispatch lên reducer
      const action = setUserLoginAction(result.data.content);

      dispatch(action);
    } catch (err) {
      console.log({ err });
    }
  };
};
