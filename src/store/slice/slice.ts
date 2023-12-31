import { createSlice } from '@reduxjs/toolkit'
			
const CountSlice = createSlice({
	name: 'counter',
	initialState:{
		value:0
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrementby:(state,{payload}) =>{
			state.value-=payload;
		}
	}
})
		
// Action creators are generated for each case reducer function",
export const { increment,decrementby } = CountSlice.actions
export const  CountReducer =  CountSlice.reducer;

const catsSlice = createSlice({
	name: 'cats',
	initialState:{
		cats:[],
		isLoading:true
	},
	reducers: {
		getcatsfetch: (state) => {
			state.isLoading = true;
		},
		getcatsuccess:(state,{payload})=>{
			state.isLoading = false;
			state.cats = payload;
		},
		getcatsfailed:(state) =>{
			state.isLoading = false;
		}
	}
})
		
// Action creators are generated for each case reducer function",
export const { getcatsfetch,getcatsuccess,getcatsfailed } = catsSlice.actions
export const  CatsReducer =  catsSlice.reducer;
