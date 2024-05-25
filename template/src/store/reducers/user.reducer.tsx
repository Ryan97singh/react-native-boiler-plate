import { IUser } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IAuthUserState = IUser | null;

const initialState = null as IAuthUserState;

const authUser = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<IPatient>) => {
      state = action.payload;
      return state;
    },
    deleteAuthUser: state => {
      state = initialState;
      return state;
    },
  },
});

export const { setAuthUser, deleteAuthUser } = authUser.actions;
export default authUser.reducer;
