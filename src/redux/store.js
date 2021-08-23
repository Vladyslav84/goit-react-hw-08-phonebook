import { configureStore, getDefaultMiddleware, combineReducers  } from '@reduxjs/toolkit';
import contactsSlice from './slices/contacts';
import filterSlice from './slices/filter';
import authSlice from '../redux/slices/authentication/authentication';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const rootReducer = combineReducers({
//   contactsSlice,
//   filterSlice,
//   authSlice
//   // perReducer: persistReducer(authPersistConfig,authSlice),
 
// });
// const perReducer = persistReducer(authPersistConfig, rootReducer);
 
const store = configureStore({
   reducer:
  {
    authSlice: persistReducer(authPersistConfig, authSlice),
    contactsSlice :contactsSlice,
    filterSlice: filterSlice,
   
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);
export default {store, persistor};