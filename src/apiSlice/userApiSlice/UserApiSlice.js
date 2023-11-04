import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userListSlice = createApi({
  reducerPath: "user_list",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUserList: builder.query({
      query: ({ currentPage, itemsPerPage }) => {
        return `/users?page=${currentPage}&per_page=${itemsPerPage}`;
      },
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUserListQuery } = userListSlice;
