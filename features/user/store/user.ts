// TODO: adapty or RevenueCat implementation

import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type RootState } from '@/providers/store';

interface UserStore {
  premium: boolean;
}

const initialState: UserStore = {
  premium: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPremium(state, { payload }: PayloadAction<UserStore['premium']>) {
      state.premium = payload;
    },
  },
});

export const { setPremium } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const selectPremium = (state: RootState): UserStore['premium'] =>
  state.user.premium;
