import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../helpers/axios';

export const fetchOrdersHistory = createAsyncThunk(
	'historyOrders/fetchOrdersHistory',
	async (_, thunkAPI) => {
		try {
			const data = await axios.get('/ordersHistory');
			return data;
		} catch (error) {
			return console.log(error.message);
		}
	}
);

const initialState = {
	orders: null,
	totalPrice: 0,
	id: '',
	status: 'loading',
};

const ordersHistorySlice = createSlice({
	name: 'ordersHistory',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchOrdersHistory.pending]: (state) => {
			state.ordersHistory = null;
			state.status = 'loading';
		},
		[fetchOrdersHistory.fulfilled]: (state, action) => {
			state.ordersHistory = action.payload;
			state.status = 'loaded';
		},
		[fetchOrdersHistory.rejected]: (state) => {
			state.ordersHistory = null;
			state.status = 'error';
		},
	},
});

export const ordersHistoryReducer = ordersHistorySlice.reducer;
