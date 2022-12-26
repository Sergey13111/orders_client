import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../helpers/calcTotalPrice';
import { getCartFromLS } from '../helpers/getCartFromLS';
import axios from '../helpers/axios';

export const fetchCreateOrder = createAsyncThunk('cart/fetchCreateOrder', async ({ ...params }) => {
	try {
		const data = await axios.post('/orders', { ...params });
		return data;
	} catch (error) {
		return console.log(error.message);
	}
});

const { items, totalPrice } = getCartFromLS();

const initialState = {
	totalPrice,
	items,
};

const cartOrdersSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const findItem = state.items.find((obj) => obj._id === action.payload._id);

			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				});
			}
			state.totalPrice = calcTotalPrice(state.items);
		},
		minusItem(state, action) {
			const findItem = state.items.find((obj) => obj._id === action.payload._id);

			if (findItem) {
				findItem.count--;
			}

			state.totalPrice = calcTotalPrice(state.items);
		},
		removeItem(state, action) {
			state.items = state.items.filter((obj) => obj._id !== action.payload);
			state.totalPrice = calcTotalPrice(state.items);
		},
		clearItems(state) {
			state.items = [];
			state.totalPrice = 0;
		},
	},
	extraReducers: {
		[fetchCreateOrder.pending]: (state) => {
			state.cart = null;
			state.status = 'loading';
		},
		[fetchCreateOrder.fulfilled]: (state, action) => {
			state.cart = action.payload;
			state.status = 'loaded';
		},
		[fetchCreateOrder.rejected]: (state) => {
			state.cart = null;
			state.status = 'error';
		},
	},
});

export const { addItem, removeItem, clearItems, minusItem } = cartOrdersSlice.actions;
export const cartOrdersReducer = cartOrdersSlice.reducer;
