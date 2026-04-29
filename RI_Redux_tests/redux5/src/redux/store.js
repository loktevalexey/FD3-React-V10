import { configureStore } from '@reduxjs/toolkit';

import weatherReducer from './weatherSlice';

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },
    // вообще, миддлвари надо подключать здесь
    // но именно redux-thunk в redux-toolkit подключен по умолчанию
})
