import { createSlice } from "@reduxjs/toolkit";
import { TemplateState, templateState } from "./state";
import * as templateReducers from './reducer';

export const templateSlice = createSlice({
  name: 'template',
  initialState: templateState,
  reducers: templateReducers,
});

export const { setTemplateValue } = templateSlice.actions;
export default templateSlice.reducer;