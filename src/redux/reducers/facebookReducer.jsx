import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  arrComment: [
    { name: 'Hậu mentor', content: 'ahihi' },
    { name: 'Quân mentor', content: 'hello' },
  ],
};

const facebookReducer = createSlice({
  name: 'facebookReducer',
  initialState,
  reducers: {
    addComment: (state, action) => {
      //b1: lấy dữ liệu từ payload
      let userComment = action.payload;
      //b2: cập nhật store
      state.arrComment.push(userComment);
    },
  },
});

export const { addComment } = facebookReducer.actions;

export default facebookReducer.reducer;
