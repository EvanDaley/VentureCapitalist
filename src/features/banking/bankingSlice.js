import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'counter',
  initialState: {
    accountValue: 24780n,
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the inner library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.accountValue += 1;
    },
    decrement: state => {
      state.accountValue -= 1;
    },
    incrementByAmount: (state, action) => {
      state.accountValue += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select an accountValue from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.accountValue)`
export const selectAccountValue = state => state.counter.accountValue;

export default slice.reducer;
