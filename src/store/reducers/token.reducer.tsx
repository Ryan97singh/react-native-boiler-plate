import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

const authToken = createSlice({
  name: 'authToken',
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      state = action.payload;
      return state;
    },
    deleteAuthToken: state => {
      state = initialState;
      return state;
    },
  },
});

export const { setAuthToken, deleteAuthToken } = authToken.actions;
export default authToken.reducer;
