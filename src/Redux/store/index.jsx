import {configureStore} from "@reduxjs/toolkit"
import counter from "../counterSlice"
import  CartSlice from "../CartSlice"

export const store=configureStore(
    {
        reducer:{
            counter:counter,
            cart:CartSlice
        }
    }
)