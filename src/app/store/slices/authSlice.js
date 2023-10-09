import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { END_POINT } from "@/config/end-point";
import jwtDecode from "jwt-decode";

let initialState = {
    isAuth: false,
    currentUser: null,
    tokenExp: 0,
    error: null,
};

const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null

// const token = localStorage.getItem("token")

console.log(token);

if (token) {
    let decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 > Date.now()) {
        initialState = {
            isAuth: true,
            currentUser: {
                id: decodedToken.id,
                email: decodedToken.email,
                username: decodedToken.username,
                full_name: decodedToken.full_name,
            },
            tokenExp: decodedToken.exp,
        };
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        localStorage.removeItem("token");
    }
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authorize: (state, action) => {
            console.log(action);
            console.log(state);
            localStorage.setItem("token", action.payload.token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${action.payload.token}`;
            const decoded = jwtDecode(action.payload.token);
            state.currentUser = {
                id: decoded.id,
                email: decoded.email,
                full_name: decoded.full_name,
                username: decoded.username
            };
            state.isAuth = true;
            state.tokenExp = decoded.exp;
        },

        logout: (state) => {
            state.isAuth = false;
            state.currentUser = null;
            state.tokenExp = 0;
            localStorage.removeItem("token");
        },

        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { authorize, logout, setError } = authSlice.actions;

export const getToken = (data, router) => async (dispatch) => {
    const res = await axios.post(`${END_POINT}/api/auth/signin`, data)
    if(res.status === 200){
        dispatch(authorize(res.data))
        router.push('/')
    }
}

export const signUp = (data, router) => async (dispatch) => {
    const res = await axios.post(`${END_POINT}/api/auth/signup`, data)
    if(res.status === 200){
        router.push('/login')
    }
}

export default authSlice.reducer;
