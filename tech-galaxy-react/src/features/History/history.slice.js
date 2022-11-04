import { createSlice } from '@reduxjs/toolkit'
import { historyApi } from './history.service';


const initialState = {
  status: "",
  purchases: [],
}

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(historyApi.endpoints.getHistory.matchFulfilled, (state, action) => {
      state.purchases = action.payload
    });

    builder.addMatcher(historyApi.endpoints.addToHistory.matchFulfilled, (state, action) => {
      state.purchases.push(action.payload)
    });
  }
});

export const { } = historySlice.actions

export default historySlice.reducer