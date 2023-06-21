import {  productRequired } from "@/data/products"
import {createSlice} from "@reduxjs/toolkit"
import { AppState } from "./store";

const initialState : productRequired[] = [];

export const cartSlice = createSlice({
    initialState,
    name:"cart",
    reducers:{
        AddProduct(state ,{payload} :{payload : productRequired} ){
           const productIndex = state.findIndex(p => p.id == payload.id);
           if(productIndex == -1){
                state.push(payload);
           }
           else{
                state[productIndex] = payload;
           }
        },
        RemoveProduct(state , {payload:productIndex} : {payload:string}){
            state = state.filter(p => p.id != productIndex);
        },
    }
});

export const  {AddProduct , RemoveProduct} = cartSlice.actions;
export const selectCart = (state : AppState) => state.cart

export default cartSlice;