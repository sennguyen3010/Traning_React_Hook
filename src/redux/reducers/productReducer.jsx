import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { http } from '../../util/config';

const initialState = {
  arrProduct: [{ id: 2, name: 'Adidas Prophere Black White' }],
  productDetail: {},
};

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    setArrProductAction: (state, action) => {
      const arrProduct = action.payload;
      state.arrProduct = arrProduct;
    },
    setProductDetailAction: (state, action) => {
      //lấy dữ liệu từ payload
      const productDetail = action.payload;
      //cập nhật lại state.productDetail
      state.productDetail = productDetail;
    },
  },
});

export const { setArrProductAction, setProductDetailAction } = productReducer.actions;

export default productReducer.reducer;

// ---------------- action api ----------------
export const getProductApi = async (dispatch2) => {
  //xử lý logic api để trả về kq
  try {
    let result = await http.get('/Product');

    // axios({
    //   url: 'https://shop.cyberlearn.vn/api/Product',
    //   method: 'GET',
    // });
    console.log('ket qua', result.data.content);
    //sau khi lay ket qua tu api ve dua vao state arrProduct
    // setArrProduct(result.data.content);
    //dispatch len redux
    const action = setArrProductAction(result.data.content);
    dispatch2(action);
  } catch (err) {
    console.log(err);
  }
};

//closure function
export const getProductDetailActionApi = (idProduct) => {
  return async (dispatch) => {
    //logic api gọi tại đây
    try {
      let result = await http.get(`/Product/getbyid?id=${idProduct}`);

      // axios({
      //   url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${idProduct}`,
      //   method: 'GET',
      // });

      //sau khi có dữ liệu gửi lên action loại 1 đưa lên reducer
      const actionLoai1 = setProductDetailAction(result.data.content);
      dispatch(actionLoai1);
    } catch (err) {
      console.log(err);
    }
  };
};
