/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	user: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

export const LoginUser = createAsyncThunk(
	"user/LoginUser",
	async (user, ThunkAPI) => {
		try {
			const response = await axios.get("http://localhost:5000/login", {
				email: user.email,
				password: user.password,
			});
			return response.data;
		} catch (error) {
			if (error.message) {
				const message = error.response.data.msg;
				return ThunkAPI.rejectWithValue(message);
			}
		}
	}
);

export const getMe = createAsyncThunk("user/getMe", async (_, ThunkAPI) => {
	try {
		const response = await axios.get("http://localhost:5000/getMe");
		return response.data;
	} catch (error) {
		if (error.response) {
			const message = error.response.data.msg;
			return ThunkAPI.rejectWithValue(message);
		}
	}
});

export const LogOut = createAsyncThunk("user/logOut", async (_, ThunkAPI) => {
	const response = await axios.get("http://localhost:5000/logOut");
	return response.data;
});

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder.addCase(LoginUser.pending, (state) => {
			// mengubah isLoading menjadi true ketika ingin
			state.loading = true;
		});
		builder.addCase(LoginUser.fullfield, (state, action) => {
			// mengubah isLoading menjadi true ketika ingin
			state.isLoading = false;
			state.isSuccess = true;
			state.message = action.playload;
		});
		builder.addCase(LoginUser.rejected, (state, action) => {
			// mengubah isLoading menjadi true ketika ingin
			state.isLoading = false;
			state.isSuccess = true;
			state.message = action.playload;
		});
		builder.addCase(getMe.pending, (state) => {
			// mengubah isLoading menjadi true ketika ingin
			state.isLoading = true;
		});
		builder.addCase(getMe.fullfield, (state, action) => {
			// mengubah isLoading menjadi true ketika ingin
			state.isLoading = false;
			state.isSuccess = true;
			state.message = action.playload;
		});
		builder.addCase(getMe.rejected, (state, action) => {
			// mengubah isLoading menjadi true ketika ingin
			state.isLoading = false;
			state.isSuccess = true;
			state.message = action.playload;
		});
	},
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;