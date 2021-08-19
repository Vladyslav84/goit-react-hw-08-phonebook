import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


 axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const register = createAsyncThunk('auth/register', async credentials => {
  // console.log(credentials)
  try {
    const { data } = await axios.post('/users/signup', credentials);
    // token.set(data.token);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const logIn = createAsyncThunk('auth/logIn', async credentials => {
  console.log(credentials)
  try {
    const { data } = await axios.post('/users/login', credentials);
    // token.set(data.token);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});


const aut_operation = {
  register,
//   logOut,
  logIn,
//   fetchCurrentUser,
};
export default aut_operation;