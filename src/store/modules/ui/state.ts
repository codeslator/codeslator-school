export interface UIState {
  mode: string;
  openModal: boolean;
  openBackdrop: boolean;
  openDrawer: boolean;

}

export const uiState: UIState = {
  mode: 'light',
  openBackdrop: false,
  openModal: false,
  openDrawer: false,
};