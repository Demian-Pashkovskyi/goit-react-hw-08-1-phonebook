import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Contacts', 'User'],
  endpoints: builder => ({
    register: builder.mutation({
      query: data => ({
        url: `/users/signup`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['User', 'Contacts'],
    }),
    login: builder.mutation({
      query: data => ({
        url: `/users/login`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['User', 'Contacts'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['User', 'Contacts'],
    }),
    fetchCurrentUser: builder.query({
      query: () => `/users/current`,
      providesTags: ['User'],
    }),
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    getContactById: builder.query({
      query: id => `/contacts/${id}`,
      providesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: data => ({
        url: `/contacts`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Contacts'],
    }),
    editContact: builder.mutation({
      query: ([id, data]) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContactById: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useFetchCurrentUserQuery,
  useGetContactsQuery,
  useGetContactByIdQuery,
  useDeleteContactByIdMutation,
  useCreateContactMutation,
  useEditContactMutation,
} = contactsApi;