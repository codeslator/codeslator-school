import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Backdrop, CircularProgress, Typography } from '@mui/material';
import { TestLayout } from '../views/layouts/TestLayout';
import { TestLayout2 } from '../views/layouts/TestLayout2';

export const Router = () => (
  <Suspense fallback={(
    <Backdrop open>
      <CircularProgress color="primary" />
    </Backdrop>
  )}>
    <BrowserRouter>
      <Routes>
        <Route element={<TestLayout />}>
          <Route path="/" element={<Typography>Hello world</Typography>} />
        </Route>
        <Route element={<TestLayout2 />}>
          <Route path="login" element={<Typography>Login</Typography>} />
          <Route path="register" element={<Typography>Register</Typography>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Suspense>
);
