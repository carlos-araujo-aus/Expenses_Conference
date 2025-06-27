import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "/Expenses_Conference/microphone.jpg",  
      name: "Microphone",
      cost: 100,
      quantity: 0,
    },
    {
      img: "/Expenses_Conference/speaker.jpg",     
      name: "Speaker",
      cost: 150,
      quantity: 0,
    },
    {
      img: "/Expenses_Conference/projector.jpg",   
      name: "Projector",
      cost: 200,
      quantity: 0,
    },
    {
      img: "/Expenses_Conference/laptop.jpg",      
      name: "Laptop",
      cost: 400,
      quantity: 0,
    },
    {
      img: "/Expenses_Conference/camera.jpg",      
      name: "Camera",
      cost: 300,
      quantity: 0,
    },
    {
      img: "/Expenses_Conference/headphones.jpg",  
      name: "Headphones",
      cost: 120,
      quantity: 0,
    },
  ],

  reducers: {

    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
          item.quantity++;
      }
    },

    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
          item.quantity--;
      }
    },
  }
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
