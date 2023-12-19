import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        quantity: 1,
        cartAmount: 0
    },
    reducers: {
        addItems: (state, action) => {
            const newitems = action.payload;
            // we can use type key in the object also
            if (state.items.find((item) => item.id === newitems.id)) {
                toast.error("Ooops ! items are already exist in the cart ! Please check out the cart page", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else {
                state.items.push(newitems);
                state.cartAmount += newitems.price
                // we can use type key in the object also
                toast.success("Successfully added the items", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        },
        increaseQty: (state) => {
            state.quantity += 1;
        },
        decreaseQty: (state) => {
            if (state.quantity > 1) {
                state.quantity -= 1;
            }
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
})

export const { addItems, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer