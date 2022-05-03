import { RootState } from '.';

export const selectUIState = (state: RootState) => state.ui;
export const selectTemplateState = (state: RootState) => state.template;