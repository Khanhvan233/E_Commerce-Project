import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    name:'',
    email:''
}
export const adminSlide = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        updateAdmin: (state, action) => {
            const { name, email } = action.payload;
            console.log('action',action)
            // state.name = name || email;
            // state.email = email;
          }
    }
  })
export const { updateAdmin } = adminSlide.actions
export default adminSlide.reducer