import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: "",
}

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += "1";
    },
    decrement: (state) => {
      state.value += "1";
    }
  },
})

export const { increment, decrement } = dataSlice.actions;

export default dataSlice.reducer;