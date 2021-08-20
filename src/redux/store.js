import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './slices/contacts';
import filterSlice from './slices/filter';
import authSlice from '../redux/slices/authentication/authentication';


const rootReducer = {
  contactsSlice,
  filterSlice,
  authSlice
  
};

const store = configureStore({
  reducer: 
    rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;