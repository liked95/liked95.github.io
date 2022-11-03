import { createSlice, current } from '@reduxjs/toolkit'
import { cartApi } from './cart.service';


const initialState = {
  status: "",
  items: [],
  shippingFee: 0
}

const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    updateFee(state, action) {
      state.shippingFee = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(cartApi.endpoints.getCart.matchFulfilled, (state, action) => {
      // console.log(action);
      state.items = action.payload
    });

    builder.addMatcher(cartApi.endpoints.addToCart.matchFulfilled, (state, action) => {
      state.items.push(action.payload)
    });

    builder.addMatcher(cartApi.endpoints.updateCartItemCount.matchFulfilled, (state, action) => {
      // console.log(state, action);
      // console.log(state.items)
      let idx = state.items.findIndex(item => item.id == action.payload.id)
      state.items[idx] = action.payload
    });

    builder.addMatcher(cartApi.endpoints.toggleCheck.matchFulfilled, (state, action) => {
      let item = state.items.find(item => item.id == action.payload.id)
      item.checked = !item.checked

    });

    builder.addMatcher(cartApi.endpoints.increaseItemCount.matchFulfilled, (state, action) => {
      let item = state.items.find(item => item.id == action.payload.id)
      item.count++

    });

    builder.addMatcher(cartApi.endpoints.decreaseItemCount.matchFulfilled, (state, action) => {
      let item = state.items.find(item => item.id == action.payload.id)
      item.count--
    });

    builder.addMatcher(cartApi.endpoints.deleteItem.matchFulfilled, (state, action) => {
      let idx = state.items.findIndex(item => item.id == action.payload)
      state.items.splice(idx, 1)
    });
  }
});

export const { updateFee} = cartSlice.actions
export const getShippingFee = store => store.cartList.shippingFee

export default cartSlice.reducer