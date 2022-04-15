import { PayloadAction } from '@reduxjs/toolkit';
import { UIState } from './state';

export const setMode = (state: UIState, { payload }: PayloadAction<string>) => {
  state.mode = payload;
};

export const toggleModal = (state: UIState) => {
  state.openModal = !state.openModal;
};

export const toggleBackdrop = (state: UIState) => {
  state.openBackdrop = !state.openBackdrop;
};

export const toggleDrawer = (state: UIState) => {
  state.openDrawer = !state.openDrawer;
};