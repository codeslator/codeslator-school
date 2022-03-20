import { PayloadAction } from '@reduxjs/toolkit';
import { UIState } from './state';

export const setMode = (state: UIState, { payload }: PayloadAction<string>) => {
  state.mode = payload;
};

export const setOpenModal = (state: UIState, { payload }: PayloadAction<boolean>) => {
  state.openModal = payload;
};

export const setOpenBackdrop = (state: UIState, { payload }: PayloadAction<boolean>) => {
  state.openBackdrop = payload;
};