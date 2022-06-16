import { updateStart, updateSuccess, updateError } from './userSlice'
import axios from 'axios'
export const login = async (user, dispatch) => {
  dispatch(updateStart())
  try {
    const res = await axios.post('http://localhost:5000/api/users/login', user)
    dispatch(updateSuccess(res.data))
  } catch (err) {
    dispatch(updateError())
  }
}
