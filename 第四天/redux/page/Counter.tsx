// features/counter/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './service/counterSlice';

export default function Counter() {
  // 从 store 的 state 中提取 counter 数据
  const count = useSelector((state) => state.counter.value);
  // 获取 dispatch 函数
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}