import { createSlice } from '@reduxjs/toolkit';
const initialState={
  userData:[],
  user:{},
  show:false
}
export const userSlice = createSlice({
  name:"userData",
  initialState,
  reducers: {
    setDataUser: (state, action) => {
        state.userData= action.payload
      },
      setUser: (state, action) => {
        state.user= action.payload
      },
      setShow: (state, action) => {
        state.show= action.payload
      }
  },
});

// this is for dispatch
export const { setDataUser ,setUser,setShow} = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;