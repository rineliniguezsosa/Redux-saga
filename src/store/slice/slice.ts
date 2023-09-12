import { createSlice } from '@reduxjs/toolkit'
			
const CountSlice = createSlice({
	name: 'CountSlice',
	initialState:{
		value:0
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrementby:(state,{payload}) =>{
			state.value+=payload;
		}
	}
})
		
// Action creators are generated for each case reducer function",
export const { increment,decrementby } = CountSlice.actions
export const  CountReducer =  CountSlice.reducer;
