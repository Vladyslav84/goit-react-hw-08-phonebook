import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import aut_operation from './aut_operation';



const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [aut_operation.register.fulfilled](state, action) {
      console.log(action.payload)
      if (action.payload) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      } else {
        alert( "Check the entered data")
      }
     
    },
    [aut_operation.register.rejected](state, action) {
       console.log(action)
      // alert(action)
      // state.user = action.payload.user;
      // state.token = action.payload.token;
      state.isLoggedIn = false;
    },
    [aut_operation.logIn.fulfilled](state, action) {
     if (action.payload) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      }else {
        alert( "Check the entered data")
      }
    },
    [aut_operation.logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    }
  }
});

export default authSlice.reducer;