import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Backdrop, CircularProgress, Typography } from '@mui/material';
import { routes } from './routes'

export const Router = () => (
  <Suspense fallback={(
    <Backdrop open>
      <CircularProgress color="primary" />
    </Backdrop>
  )}>
    <BrowserRouter>
      <Routes>
        {routes.map(({ path: root, Layout, children }) => (
          <Route element={<Layout />} key={root}>
            {children.map(({ path, Component }) => (
              <Route path={path} element={<Component />} key={path} />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  </Suspense>
);
