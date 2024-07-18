import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : false
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,

    reducers:{
        handleProfile: (state) => {
            state.isOpen = !state.isOpen
        }
    }
});

export default profileSlice.reducer;
export const {handleProfile} = profileSlice.actions