import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface UserSessionState {
  isLogged: boolean;
  username: string;
}

const initialState: UserSessionState = {
  isLogged: false,
  username: "",
}

export const userSessionSlice = createSlice({
  name: 'userSession',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLogged = false;
      state.username = "";
    },
    login: (state, action: PayloadAction<string>) => {
      state.isLogged = true
      state.username = action.payload
    },
  },
});

export const { login, logout } = userSessionSlice.actions;

export const isUserLoggedIn = (state: RootState) => state.userSession.isLogged;

export const userName = (state: RootState) => state.userSession.username;

export default userSessionSlice.reducer;
