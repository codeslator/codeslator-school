import { createSlice } from "@reduxjs/toolkit";
import { uiState } from "./state";
import * as uiReducer from './reducer';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiState,
  reducers: uiReducer,
});

export const { setMode,
  toggleModal: TOGGLE_MODAL,
  toggleBackdrop: TOGGLE_BACKDROP,
  toggleDrawer: TOGGLE_DRAWER,
  setMode: SET_MODE,
} = uiSlice.actions;
export default uiSlice.reducer;