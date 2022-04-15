import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Backdrop, CircularProgress, Typography } from '@mui/material';
import { TestLayout } from '../views/layouts/TestLayout';
import { TestLayout2 } from '../views/layouts/TestLayout2';
import { webRoutes } from './routes/webRoutes';
import { LandingPageLayout } from '../views/layouts/LandingPageLayout';
import { authRoutes } from './routes/authRoutes';

export const Router = () => (
  <Suspense fallback={(
    <Backdrop open>
      <CircularProgress color="primary" />
    </Backdrop>
  )}>
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPageLayout />}>
          {webRoutes.map(({ path, Component }) => (
            <Route path={path} element={<Component />} key={path} />
          ))}
        </Route>
        <Route element={<LandingPageLayout />}>
          {authRoutes.map(({ path, Component }) => (
            <Route path={path} element={<Component />} key={path} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </Suspense>
);
