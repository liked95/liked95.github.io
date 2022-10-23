import { createSlice } from '@reduxjs/toolkit'
import { cartApi } from './cart.service';


const initialState = {
  status: "",
  items: [],
}

const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(cartApi.endpoints.getCart.matchFulfilled, (state, action) => {
      // console.log(action);
      state.items = action.payload
    });

    builder.addMatcher(cartApi.endpoints.addToCart.matchFulfilled, (state, action) => {
      state.items.push(action.payload)
    });

    builder.addMatcher(cartApi.endpoints.updateCartItemCount.matchFulfilled, (state, action) => {
      console.log(state, action);

      let idx = state.items.findIndex(item => item.id == action.payload.id)
      state.items[idx].count += action.payload.count
    });
  }
});

export const { } = cartSlice.actions

export default cartSlice.reducer