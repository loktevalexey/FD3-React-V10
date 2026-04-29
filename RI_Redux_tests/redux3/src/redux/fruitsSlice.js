import { createSlice } from '@reduxjs/toolkit';

const initialState={
  apples: 0,  // сколько есть яблок
  pears: 0,   // сколько есть груш
}

export const fruitsSlice = createSlice({
  name: 'fruits',
  initialState,
  reducers: {

    appleAdd: (state,action) => {
      state.apples+=action.payload;  // что мы передаём в appleAdd во время вызова dispatch - попадает сюда как action.payload
    },

    pearsAdd: (state,action) => {
      state.pears+=action.payload;
    },

  },
});

// Redux Toolkit создаёт экшны автоматически, вот они:
export const { appleAdd, pearsAdd } = fruitsSlice.actions;

// Redux Toolkit создаёт редьюсер автоматически, вот он:
export default fruitsSlice.reducer;
// Redux Toolkit делает магию под капотом, оборачивая все функции внутри reducers библиотекой Immer.js
