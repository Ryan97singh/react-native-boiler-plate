import { customBaseQuery } from '@/store/services';
import { createApi } from '@reduxjs/toolkit/query/react';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: customBaseQuery(),
  tagTypes: ['PROFILE'],
  endpoints: builder => ({
    // familyHistory: builder.query<IFamilyAilment[], string | undefined>({
    //   query: patientId => ({
    //     url: format(FAMILY_HISTORY, [patientId]),
    //   }),
    //   providesTags: ['PROFILE'],
    //   forceRefetch: () => true,
    // }),

    // addAilments: builder.mutation<IAllergy, IAddAilmentRequest>({
    //   query: ({ patientId, ...data }) => ({
    //     url: format(ADD_AILMENTS, [patientId]),
    //     method: IHttpMethod.POST,
    //     body: data,
    //   }),
    //   invalidatesTags: ['PROFILE'],
    // }),

    // addAllergy: builder.mutation<IAllergy, IAddAllergyRequest>({
    //   query: ({ patientId, ...data }) => ({
    //     url: format(ADD_ALLERGY, [patientId]),
    //     method: IHttpMethod.POST,
    //     body: data,
    //   }),
    //   invalidatesTags: ['PROFILE'],
    // }),

  }),
});

export const {
} = profileApi;
