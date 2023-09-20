import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data,
            }),
            keepUnusedDataFor: 5,
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: USERS_URL,
                method: 'POST',
                body: data,
            })
        }),
        profile: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data,
            })
        }),
        getUsers: builder.query({
            query: () => ({
                url: USERS_URL
            }),
            providesTags: ['User'],
            keepUnusedDataFor: 5
        }),
        deleteUsers: builder.mutation({
            query: (userId) => ({
                url: `${USERS_URL}/${userId}`,
                method: 'DELETE',
            })
        }),
        getUserDetails: builder.query({
            query: (userId) => ({
                url: `${USERS_URL}/${userId}`,
            })
        }),
        updateUser: builder.mutation({
            query: ( data ) => ({
                url: `${USERS_URL}/${data.userId}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['User'],
        })
    })
});

export const { 
    useLoginMutation, 
    useLogoutMutation, 
    useRegisterMutation, 
    useProfileMutation, 
    useGetUsersQuery, 
    useDeleteUsersMutation,
    useGetUserDetailsQuery,
    useUpdateUserMutation, 
} = usersApiSlice;