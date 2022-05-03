import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { Router } from './router/Router';
import { persistedStore, store } from './store';
import { defaultTheme } from './views/assets/themes/index';

function CodeslatorSchoolApp() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Router />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default CodeslatorSchoolApp
