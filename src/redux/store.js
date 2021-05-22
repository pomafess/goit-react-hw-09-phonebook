import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import bookReducer from './phonebook/phonebook-reducer';
import authReducer from './auth/auth-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const authPersistConfig = {
  key: 'auth',
  storage,
   whitelist: ['token'],
}

export const store = configureStore({
   reducer: {
    phonebook: bookReducer,
    auth: persistReducer(authPersistConfig, authReducer),
},
   middleware: middleware,
   devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store)

