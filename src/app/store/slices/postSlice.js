import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { END_POINT } from "@/config/end-point";

export const postSlice = createSlice({
    name: "post",
    initialState:{
        posts: [],
        post: {}
    },
    reducers: {
        setMyPosts: (state, action) => {
            state.posts = action.payload
        },
        setMyPost: (state, action) => {
            state.post = action.payload
        },

    }
})

export const createPost = (data) => async(dispatch) => {
    try {
        const res = await axios.post(`${END_POINT}/api/post/newPost`)
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}