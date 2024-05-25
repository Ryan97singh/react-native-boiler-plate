import { BASE_URL } from '@/api';
import { navigateWithReset } from '@/hooks/navigation';
import { showToast } from '@/services/toast';
import { RootState } from '@/store';
import { deleteAuthToken } from '@/store/reducers/token.reducer';
// import { deletePatientProfile } from '@/store/reducers/user-profile.reducer';
import { deleteAuthUser } from '@/store/reducers/user.reducer';
// import { IError } from '@/types';
// import { showRTKErrorMessage } from '@/utils/strings';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { Platform } from 'react-native';

export const customBaseQuery: typeof fetchBaseQuery =
  (baseQueryArgs = {}) =>
  async (fetchArgs, api, extraOptions = {}) => {
    const { getState, dispatch } = api;
    const state = getState() as RootState;
    const token = state.authToken;

    const res = await fetchBaseQuery({
      ...baseQueryArgs,
      baseUrl: BASE_URL,
      prepareHeaders: headers => {
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }

        headers.set('Platform', Platform.OS);

        return headers;
      },
    })(fetchArgs, api, extraOptions);

    // Check for response
    if (res?.error) {
      showToast('Something went wrong');
    }

    return res;
  };
