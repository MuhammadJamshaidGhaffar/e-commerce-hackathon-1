'use client'

import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import cartSlice from "./cartSlice";

const makeStore = ()=> configureStore({
    reducer:{
        [cartSlice.name] : cartSlice.reducer
    }
});

export const store = makeStore();
export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore["getState"]>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export const wrapper = createWrapper<AppStore>(makeStore);