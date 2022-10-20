import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "/todos"
        }),
        createTodo: builder.mutation({
            query: (data) => ({
                url: "/todos",
                method: "POST",
                body: data
            })
        }),
        updateTodos: builder.mutation({
            query: (data) => ({
                url: `/todos/${data.id}`,
                method: "PUT",
                body: data
            })
        }),
        deleteTodos: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: "DELETE",
            }),
            transformResponse: (response, meta, arg) => {
                // console.log({response, meta, arg});
                return arg
            }
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodosQuery, useCreateTodoMutation, useUpdateTodosMutation, useDeleteTodosMutation } = todoApi