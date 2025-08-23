import { createSlice } from "@reduxjs/toolkit";

const config = createSlice({
    name:"config",
    initialState:{
        lang:"en"
    },
    reducers:{
      changeLanuage:(state , action) => {
        state.lang = action.payload;
      },        
    }
});
export const {changeLanuage} = config.actions;
export default config.reducer;