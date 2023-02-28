import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import Loading from './components/Loading';
import NotFount from './components/NotFount';

const DocumentTitle = ({ children, title }) => {
  document.title = title;
  return <>{children}</>;
};

const lazyLoadCollections = (projectName) => {
  const LazyElement = lazy(() => import(`./components/collections/${projectName}/index.jsx`));
  return (
    <Suspense fallback={<Loading />}>
      <DocumentTitle title={projectName}>
        <LazyElement />
      </DocumentTitle>
    </Suspense>
  );
};

export const config = {
  path: '/',
  element: <Layout />,
  children: [
    {
      index: true,
      element: (
        <DocumentTitle title="design-collections">
          <Home />
        </DocumentTitle>
      ),
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
      path: 'DoubleVerticalSlider',
      element: lazyLoadCollections('DoubleVerticalSlider'),
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
      path: 'FaqCollapse',
      element: lazyLoadCollections('FaqCollapse'),
    },
    {
      path: 'FeedbackUiDesign',
      element: lazyLoadCollections('FeedbackUiDesign'),
    },
    {
      path: 'FormWave',
      element: lazyLoadCollections('FormWave'),
    },
    {
      path: 'GithubProfiles',
      element: lazyLoadCollections('GithubProfiles'),
    },
    {
      path: 'GoodCheapFast',
      element: lazyLoadCollections('GoodCheapFast'),
    },
    {
      path: 'HiddenSearchWidget',
      element: lazyLoadCollections('HiddenSearchWidget'),
    },
    {
      path: 'Hoverboard',
      element: lazyLoadCollections('Hoverboard'),
    },
    {
      path: 'ImageCarousel',
      element: lazyLoadCollections('ImageCarousel'),
    },
    {
      path: 'IncrementingCounter',
      element: lazyLoadCollections('IncrementingCounter'),
    },
    {
      path: 'InfiniteScrolling',
      element: lazyLoadCollections('InfiniteScrolling'),
    },
    {
      path: 'InsectCatchGame',
      element: lazyLoadCollections('InsectCatchGame'),
    },
    {
      path: 'KineticLoader',
      element: lazyLoadCollections('KineticLoader'),
    },
    {
      path: 'LiveUserFilter',
      element: lazyLoadCollections('LiveUserFilter'),
    },
    {
      path: 'MobileNavigation',
      element: lazyLoadCollections('MobileNavigation'),
    },
    {
      path: 'MobileTabNavigation',
      element: lazyLoadCollections('MobileTabNavigation'),
    },
    {
      path: 'MovieApp',
      element: lazyLoadCollections('MovieApp'),
    },
    {
      path: 'MovieSeatBooking',
      element: lazyLoadCollections('MovieSeatBooking'),
    },
    {
      path: 'NotesApp',
      element: lazyLoadCollections('NotesApp'),
    },
    {
      path: 'PasswordGenerator',
      element: lazyLoadCollections('PasswordGenerator'),
    },
    {
      path: 'PasswordStrengthBackground',
      element: lazyLoadCollections('PasswordStrengthBackground'),
    },
    {
      path: 'Pokedex',
      element: lazyLoadCollections('Pokedex'),
    },
    {
      path: 'ProgressSteps',
      element: lazyLoadCollections('ProgressSteps'),
    },
    {
      path: 'QuizApp',
      element: lazyLoadCollections('QuizApp'),
    },
    {
      path: 'RandomChoicePicker',
      element: lazyLoadCollections('RandomChoicePicker'),
    },
    {
      path: 'RotatingNavigationAnimation',
      element: lazyLoadCollections('RotatingNavigationAnimation'),
    },
    {
      path: 'ScrollAnimation',
      element: lazyLoadCollections('ScrollAnimation'),
    },
    {
      path: 'SoundBoard',
      element: lazyLoadCollections('SoundBoard'),
    },
    {
      path: 'SplitLandingPage',
      element: lazyLoadCollections('SplitLandingPage'),
    },
    {
      path: 'StickyNavbar',
      element: lazyLoadCollections('StickyNavbar'),
    },
    {
      path: 'TestimonialBoxSwitcher',
      element: lazyLoadCollections('TestimonialBoxSwitcher'),
    },
    {
      path: 'ThemeClock',
      element: lazyLoadCollections('ThemeClock'),
    },
    {
      path: 'ThreeDBackgroundBoxes',
      element: lazyLoadCollections('ThreeDBackgroundBoxes'),
    },
    {
      path: 'ToastNotification',
      element: lazyLoadCollections('ToastNotification'),
    },
    {
      path: 'TodoList',
      element: lazyLoadCollections('TodoList'),
    },
    {
      path: 'VerifyAccountUi',
      element: lazyLoadCollections('VerifyAccountUi'),
    },
    {
      path: '*',
      element: <NotFount />,
    },
  ],
};

export default createBrowserRouter([config]);
