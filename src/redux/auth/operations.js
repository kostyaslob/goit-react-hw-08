import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register = createAsyncThunk("auth/register", async (values) => {
    const response = await axios.post("/users/signup", values);

    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

    return response.data;
});

export const login = createAsyncThunk("auth/login", async (values) => {
    const response = await axios.post("/users/login", values);

    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

    return response.data;
});

export const logout = createAsyncThunk("auth/logout", async () => { });

export const refreshUser = createAsyncThunk("auth/refresh", async () => { });