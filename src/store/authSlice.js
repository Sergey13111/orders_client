import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from '../helpers/axios';

export const fetchAuth = createAsyncThunk('fetchAuth', async (params) => {
	try {
		const data = await axios.post('/auth/login', params);
		return data;
	} catch (error) {
		return console.log(error.message);
	}
});

export const fetchRegister = createAsyncThunk('fetchRegister', async (params) => {
	try {
		const data = await axios.post('/auth/register', params);
		return data;
	} catch (error) {
		return console.log(error.message);
	}
});

export const fetchAuthMe = createAsyncThunk('/fetchAuthMe', async () => {
	try {
		const data = await axios.get('/auth/me');
		return data;
	} catch (error) {
		return console.log(error.message);
	}
});

const initialState = {
	data: null,
	status: 'loading',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			state.data = null;
		},
	},
	extraReducers: {
		[fetchAuth.pending]: (state) => {
			state.status = 'loading';
			state.data = null;
		},
		[fetchAuth.fulfilled]: (state, action) => {
			state.status = 'loaded';
			state.data = action.payload;
		},
		[fetchAuth.rejected]: (state) => {
			state.status = 'error';
			state.data = null;
		},
		[fetchAuthMe.pending]: (state) => {
			state.status = 'loading';
			state.data = null;
		},
		[fetchAuthMe.fulfilled]: (state, action) => {
			state.status = 'loaded';
			state.data = action.payload;
		},
		[fetchAuthMe.rejected]: (state) => {
			state.status = 'error';
			state.data = null;
		},
		[fetchRegister.pending]: (state) => {
			state.status = 'loading';
			state.data = null;
		},
		[fetchRegister.fulfilled]: (state, action) => {
			state.status = 'loaded';
			state.data = action.payload;
		},
		[fetchRegister.rejected]: (state) => {
			state.status = 'error';
			state.data = null;
		},
	},
});

export const selectIsAuth = (state) => Boolean(state.auth.data);
export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
