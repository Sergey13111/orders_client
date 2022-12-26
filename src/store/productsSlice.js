import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../helpers/axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, thunkAPI) => {
	try {
		const data = await axios.get('/products');
		return data;
	} catch (error) {
		return console.log(error.message);
	}
});

const initialState = {
	products: null,
	status: 'loading',
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchProducts.pending]: (state) => {
			state.products = null;
			state.status = 'loading';
		},
		[fetchProducts.fulfilled]: (state, action) => {
			state.products = action.payload;
			state.status = 'loaded';
		},
		[fetchProducts.rejected]: (state) => {
			state.products = null;
			state.status = 'error';
		},
	},
});

export const productsReducer = productsSlice.reducer;
