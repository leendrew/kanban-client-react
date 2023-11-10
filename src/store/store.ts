import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {},
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useTypedDispatch = useDispatch<AppDispatch>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
