import { createSlice } from '@reduxjs/toolkit';

const initialState={
  dataLoadState: 0, // 0 - не загружено, 1 - загружается, 2 - загружено, 3 - ошибка
  dataLoadError: null,
  data: null,
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {

    updateLoadState: (state,action) => {
      state.dataLoadState = action.payload.state;
      state.dataLoadError = action.payload.error;
    },

    updateData: (state,action) => {
      state.data = action.payload;
    },

  },
});

export const { updateLoadState, updateData } = weatherSlice.actions;

export default weatherSlice.reducer;
