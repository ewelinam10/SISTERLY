import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface UserSessionState {
  isLogged: boolean;
  username: string;
}

const initialState: UserSessionState = {
  isLogged: localStorage.getItem('isLogged') == 'true' ? true : false,
  username: localStorage.getItem('username') ?? ''
}

export const userSessionSlice = createSlice({
  name: 'userSession',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.setItem('isLogged','false');
      localStorage.setItem('username','');
      state.isLogged = false;
      state.username = "";
    },
    login: (state, action: PayloadAction<string>) => {
      localStorage.setItem('isLogged','true');
      localStorage.setItem('username',action.payload);
      state.isLogged = true
      state.username = action.payload
    },
  },
});

export const { login, logout } = userSessionSlice.actions;

export const isUserLoggedIn = (state: RootState) => state.userSession.isLogged;

export const userName = (state: RootState) => state.userSession.username;

export default userSessionSlice.reducer;
