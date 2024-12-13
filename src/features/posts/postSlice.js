import { createSlice } from "@reduxjs/toolkit";

const postSlice= createSlice({
    name:'posts',
    initialState:{
        isLoading:false,
        posts:[],
        error: null

    },

    extraReducers: (builder) =>{
        
    }
})