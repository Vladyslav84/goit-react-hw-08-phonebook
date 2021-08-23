import { createSlice } from '@reduxjs/toolkit';
import aut_operation from './aut_operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [aut_operation.register.fulfilled](state, action) {
      if (action.payload) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      } else {
        alert( "Check the entered data")
      }
     
    },
    [aut_operation.register.rejected](state, _) {
      alert( "Check the entered data")
    
      state.user = null;
      state.token = null;
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
    },
    [aut_operation.fetchCurrentUser.pending](state) {
      console.log('fff')
      state.isFetchingCurrentUser = true;
    },
    [aut_operation.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [aut_operation.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  }
});

export default authSlice.reducer;