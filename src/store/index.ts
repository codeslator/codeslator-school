import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { saveState, loadState } from '../settings/localStorage';
import templateSlice from './modules/template/index';
import uiSlice from './modules/ui/index';

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    template: templateSlice,
    ui: uiSlice,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;