import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await axios.get(`https://fakestoreapi.com/products?limit=8`)
    return response.data
})

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export default dataSlice.reducer