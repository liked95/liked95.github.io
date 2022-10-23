import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
    reducerPath: "cartApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: (builder) => ({
        getCart: builder.query({
            query: () => "/cart",
        }),

        addToCart: builder.mutation({
            query: (data) =>({
                url: "/cart",
                method: "POST",
                body: data
            })
        }),
        
        updateCartItemCount: builder.mutation({
            query: (data) =>({
                url: `/cart/${data.id}`,
                method: "PUT",
                body: data
            })
        }),
       
    }),
});


export const {useGetCartQuery, useAddToCartMutation, useUpdateCartItemCountMutation} = cartApi