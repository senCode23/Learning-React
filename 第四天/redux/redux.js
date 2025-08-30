import { configureStore } from '@reduxjs/toolkit';


const initialState = {
  count: 0
}

//创建store
const store = redux.createStore(
  (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 }
      case 'DECREMENT':
        return { count: state.count - 1 }
      default:
        return state
    }
  }
)