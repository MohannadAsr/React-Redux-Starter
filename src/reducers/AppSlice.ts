import { createSlice } from '@reduxjs/toolkit';
import { ModeSwitch, fetchPosts } from '@src/actions/AppActions';

export class AppReducerState {
  mode: 'dark' | 'light' = 'light';
  status: string = '';
  posts: any[] = [];
}

const initialState: AppReducerState = new AppReducerState();

const AppSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    switchMode: ModeSwitch,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        return { ...state, status: 'loading' };
      })
      .addCase(fetchPosts.fulfilled, (state, action: any) => {
        return { ...state, status: 'succeeded', posts: action.payload };
      })
      .addCase(fetchPosts.rejected, (state) => {
        return { ...state, status: 'failed' };
      });
  },
});

export const { switchMode } = AppSlice.actions;
export default AppSlice.reducer;
