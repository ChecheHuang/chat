import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    pending: null,
    error: false,
  },
  reducers: {
    //todo 第二階段
    updateStart: (state) => {
      state.pending = true
    },
    updateSuccess: (state, action) => {
      state.pending = false
      state.name = action.payload
    },
    updateError: (state) => {
      state.error = true
      state.pending = false
    },
  },
})
export const { updateStart, updateSuccess, updateError } = userSlice.actions

export default userSlice.reducer
