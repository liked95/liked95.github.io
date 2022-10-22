import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "features/Products/products.service";
import productReducer from "features/Products/product.slice"
import { userApi } from "features/Users/users.service";
import usersReducer from "features/Users/user.slice";
import cartReducer from "features/Cart/cart.slice";
import { cartApi } from "features/Cart/cart.service";

const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        productList: productReducer,

        [userApi.reducerPath]: userApi.reducer,
        userList: usersReducer,

        [cartApi.reducerPath]: cartApi.reducer,
        cartList: cartReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware, userApi.middleware, cartApi.middleware)
})


export default store
