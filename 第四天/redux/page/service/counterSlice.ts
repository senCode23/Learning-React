// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

// 初始状态
const initialState = {
  value: 0,
};

// 创建 slice
export const counterSlice = createSlice({
  name: 'counter', // slice 名称
  initialState,    // 初始状态
  reducers: {      // reducer 函数
    // 增加
    increment: (state) => {
      state.value += 1; // 可以直接修改状态（Immer 支持）
    },
    // 减少
    decrement: (state) => {
      state.value -= 1;
    },
    // 按指定数值增加
    incrementByAmount: (state, action) => {
      state.value += action.payload; // action.payload 是传递的参数
    },
    // 重置
    reset: (state) => {
      state.value = 0;
    },
  },
});

// 导出自动生成的 action creators
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

// 导出 reducer
export default counterSlice.reducer;