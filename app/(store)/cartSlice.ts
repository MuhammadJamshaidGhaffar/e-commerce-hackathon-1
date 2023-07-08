import {  CartItem, ProductRequired } from "@/data/products"
import {createSlice} from "@reduxjs/toolkit"
import { AppState } from "./store";
const initialState : CartItem[] = [];

export const cartSlice = createSlice({
    initialState,
    name:"cart",
    reducers:{
        AddProduct(state ,{payload} :{payload : CartItem} ){
           const productIndex = state.findIndex(p => p.id == payload.id && p.size == payload.size);
           if(productIndex == -1){
                state.push(payload);
           }
           else{
                state[productIndex].quantity += payload.quantity;
           }
        },
        RemoveProduct(state , {payload:productId} : {payload:string}){
            state = state.filter(p => p.id != productId);
        },
    }
});

export const  {AddProduct , RemoveProduct} = cartSlice.actions;
export const selectCart = (state : AppState) => state.cart

export default cartSlice;