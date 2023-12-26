import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppReducerState } from '@src/reducers/AppSlice';

export const fetchPosts = createAsyncThunk('App/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
});

export const ModeSwitch = (
  state: AppReducerState,
  action: PayloadAction<'dark' | 'light'>
) => {
  localStorage.setItem('site-mode', JSON.stringify(action.payload));
  if (action.payload === 'dark') document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
  return { ...state, mode: action.payload };
};
