import { createSlice } from "@reduxjs/toolkit";
import { UIState, uiState } from "./state";
import * as templateReducers from './reducer';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiState,
  reducers: templateReducers,
});

export const { setMode, setOpenModal, setOpenBackdrop } = uiSlice.actions;
export default uiSlice.reducer;