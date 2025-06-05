import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useCursor } from './hooks/useCursor';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Watchlist = lazy(() => import('./pages/Watchlist'));
const Compare = lazy(() => import('./pages/Compare'));

const LoadingFallback = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    data-testid="loading-spinner"
  >
    <CircularProgress />
  </Box>
);

const App = () => {
  const { cursorRef, cursorPointerRef } = useCursor();
  const location = useLocation();

  console.log('Current path:', location.pathname);
  return (
    <Box className="App" component="main">
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-pointer" ref={cursorPointerRef} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
      </Suspense>
    </Box>
  );
};

export default App;
