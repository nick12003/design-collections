import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';

const lazyLoadCollections = (projectName) => {
  const LazyElement = lazy(() => import(`./components/collections/${projectName}`));
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
      path: 'ContentPlaceholder',
      element: lazyLoadCollections('ContentPlaceholder'),
    },
    {
      path: 'CustomRangeSlider',
      element: lazyLoadCollections('CustomRangeSlider'),
    },
    {
      path: 'DadJokes',
      element: lazyLoadCollections('DadJokes'),
    },
    {
      path: 'DoubleClickHeart',
      element: lazyLoadCollections('DoubleClickHeart'),
    },
    {
      path: 'DragNDrop',
      element: lazyLoadCollections('DragNDrop'),
    },
    {
      path: 'DrawingApp',
      element: lazyLoadCollections('DrawingApp'),
    },
    {
      path: 'DrinkWater',
      element: lazyLoadCollections('DrinkWater'),
    },
    {
      path: 'EventKeyCodes',
      element: lazyLoadCollections('EventKeyCodes'),
    },
    {
      path: 'ExpandingCards',
      element: lazyLoadCollections('ExpandingCards'),
    },
    {
      path: '*',
      element: 'noMatch',
    },
  ],
};

export default createBrowserRouter([config]);
