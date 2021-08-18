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
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;

    }
  }
});

export default authSlice;