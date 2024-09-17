import { type Action, combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';

import { userReducer } from '@/features/user';

import { mvpApi } from './api';
import { storage } from './storage';
import { analyticsReducer } from '@/features/analytics';

const appReducer = combineReducers({
  user: userReducer,
  analytics: analyticsReducer,
  [mvpApi.reducerPath]: mvpApi.reducer,
});

const rootReducer = (
  state: ReturnType<typeof appReducer> | undefined,
  action: Action,
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
) => {
  return appReducer(state, action);
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['analytics', 'user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(mvpApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
