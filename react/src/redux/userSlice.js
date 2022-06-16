import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  //命名空間，name值會作為action type的前綴
  name: 'user',
  //初始化狀態
  initialState: {
    userInfo: {
      name: '輸入你的姓名',
    },
    pending: null,
    error: false,
  },
  //1.定義reducer更新狀態函數 2.元件中dispatch使用action函數
  //內置immutable.js
  reducers: {
    updateStart: (state) => {
      state.pending = true
    },
    updateSuccess: (state, action) => {
      state.pending = false
      state.userInfo = action.payload
    },
    updateError: (state) => {
      state.error = true
      state.pending = false
    },
    logout: (state) => {
      state.pending = null
    },
  },
})
export const { updateStart, updateSuccess, updateError, logout } =
  userSlice.actions

export default userSlice.reducer
