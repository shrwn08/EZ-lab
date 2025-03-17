import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const formSubmit = createAsyncThunk(
  "formSubmit",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://test.ezworks.ai/api", {
        email,
      });

      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  email: "",
  isLoading: false,
  isError: false,
  isSubmitted : false
};
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
      state.isSubmitted = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(formSubmit.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSubmitted = false;
    });

    builder.addCase(formSubmit.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSubmitted = true
    });

    builder.addCase(formSubmit.rejected, state=>{state.isError = true;
        state.isLoading = false; state.isError = true; state.isSubmitted = false;
    })
  },
});


export const {setEmail} = formSlice.actions;
export default formSlice.reducer;