import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';

const lazyLoadCollections = (projectName) => {
  const LazyElement = lazy(() => import(`./components/collections/${projectName}.jsx`));
  return (
    <Suspense fallback="Loading...">
      <LazyElement />
    </Suspense>
  );
};

export const config = {
  path: '/',
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: 'AnimatedCountdown',
      element: lazyLoadCollections('AnimatedCountdown'),
    },
    {
      path: 'AnimatedNavigation',
      element: lazyLoadCollections('AnimatedNavigation'),
    },
    {
      path: 'AutoTextEffect',
      element: lazyLoadCollections('AutoTextEffect'),
    },
    {
      path: 'BackgroundSlider',
      element: lazyLoadCollections('BackgroundSlider'),
    },
    {
      path: 'BlurryLoading',
      element: lazyLoadCollections('BlurryLoading'),
    },
    {
      path: 'ButtonRippleEffect',
      element: lazyLoadCollections('ButtonRippleEffect'),
    },
    {
      path: '*',
      element: 'noMatch',
    },
  ],
};

export default createBrowserRouter([config]);
