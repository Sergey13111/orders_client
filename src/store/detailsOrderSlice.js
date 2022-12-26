import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../helpers/axios';

export const fetchOneOrder = createAsyncThunk('detailsOrder/fetchOneOrder', async (id) => {
	try {
		const data = await axios.get(`/ordersHistory/${id}`);
		return data;
	} catch (error) {
		return console.log(error.message);
	}
});

const initialState = {
	order: null,
	totalPrice: 0,
	// totalCount: order.reduce((sum, item) => sum + item.count, 0) || 0,
	status: 'loading',
};

const detailsOrderSlice = createSlice({
	name: 'detailsOrder',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchOneOrder.pending]: (state) => {
			state.detailsOrder = null;
			state.status = 'loading';
		},
		[fetchOneOrder.fulfilled]: (state, action) => {
			state.detailsOrder = action.payload;
			state.status = 'loaded';
		},
		[fetchOneOrder.rejected]: (state) => {
			state.detailsOrder = null;
			state.status = 'error';
		},
	},
});

export const detailsOrderReducer = detailsOrderSlice.reducer;
