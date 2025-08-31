
const { configureStore } = require('@reduxjs/toolkit');

const initialState = {
  count: 0
}

// 创建store
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

const store = configureStore({
  reducer: counterReducer,
});

// 订阅store
store.subscribe(() => {
  console.log(store.getState());
});

// 派发action
store.dispatch({ type: 'INCREMENT' });
// { count: 1 }
store.dispatch({ type: 'INCREMENT' });
// { count: 2 }
store.dispatch({ type: 'DECREMENT' });