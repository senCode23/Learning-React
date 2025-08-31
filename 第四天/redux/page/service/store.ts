// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// 配置 store
export const store = configureStore({
  reducer: {
    counter: counterReducer, // 添加 counter reducer
    // 可以继续添加其他 reducer
    // user: userReducer,
    // cart: cartReducer,
  },
});

// 可选：导出类型（用于 TypeScript）
export default store;