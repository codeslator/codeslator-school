import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { Router } from './router/Router';
import { store } from './store';
import { defaultTheme } from './views/assets/themes/index';

function CodeslatorSchoolApp() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </Provider>
  )
}

export default CodeslatorSchoolApp
