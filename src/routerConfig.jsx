import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "@/Layout";
import Loading from "@/components/Loading";
import NotFount from "@/components/NotFount";
import CodePreview from "@/components/CodePreview";
import DocumentTitle from "@/components/DocumentTitle";
import Home from "@/pages/Home";

const lazyLoadCollections = (projectName) => {
  const LazyElement = lazy(() => import(`@/pages/collections/${projectName}/index.jsx`));
  return (
    <Suspense fallback={<Loading />}>
      <DocumentTitle title={projectName}>
        <div className='w-full h-full flex flex-col  lg:flex-row'>
          <div className='w-full h-full overflow-y-auto'>
            <LazyElement />
          </div>
          <CodePreview />
        </div>
      </DocumentTitle>
    </Suspense>
  );
};

const createDesignRouter = (projectName) => {
  return {
    path: projectName,
    element: lazyLoadCollections(projectName),
    loader: async () => {
      const jsResponse = await fetch(
        `https://api.github.com/repos/nick12003/design-collections/contents/src/components/collections/${projectName}/index.jsx`
      );
      const cssResponse = await fetch(
        `https://api.github.com/repos/nick12003/design-collections/contents/src/components/collections/${projectName}/style.module.scss`
      );
      const jsResult = await jsResponse.json();
      const cssResult = await cssResponse.json();

      return { jsResult, cssResult };
    },
  };
};

export const config = {
  path: "/",
  element: <Layout />,
  children: [
    {
      index: true,
      element: (
        <DocumentTitle title='design-collections'>
          <Home />
        </DocumentTitle>
      ),
    },
    {
      ...createDesignRouter("AmbientLight"),
    },
    {
      ...createDesignRouter("AnimatedCountdown"),
    },
    {
      ...createDesignRouter("AnimatedNavigation"),
    },
    {
      ...createDesignRouter("AutoTextEffect"),
    },
    {
      ...createDesignRouter("BackgroundSlider"),
    },
    {
      ...createDesignRouter("BlurryLoading"),
    },
    {
      ...createDesignRouter("ButtonRippleEffect"),
    },
    {
      ...createDesignRouter("Calculator"),
    },
    {
      ...createDesignRouter("ContentPlaceholder"),
    },
    {
      ...createDesignRouter("CustomRangeSlider"),
    },
    {
      ...createDesignRouter("DadJokes"),
    },
    {
      ...createDesignRouter("DigitalClock"),
    },
    {
      ...createDesignRouter("DoubleClickHeart"),
    },
    {
      ...createDesignRouter("DoubleVerticalSlider"),
    },
    {
      ...createDesignRouter("DragNDrop"),
    },
    {
      ...createDesignRouter("DrawingApp"),
    },
    {
      ...createDesignRouter("DrinkWater"),
    },
    {
      ...createDesignRouter("EventKeyCodes"),
    },
    {
      ...createDesignRouter("ExpandingCards"),
    },
    {
      ...createDesignRouter("FaqCollapse"),
    },
    {
      ...createDesignRouter("FeedbackUiDesign"),
    },
    {
      ...createDesignRouter("FormWave"),
    },
    {
      ...createDesignRouter("GithubProfiles"),
    },
    {
      ...createDesignRouter("GoodCheapFast"),
    },
    {
      ...createDesignRouter("HiddenSearchWidget"),
    },
    {
      ...createDesignRouter("Hoverboard"),
    },
    {
      ...createDesignRouter("ImageCarousel"),
    },
    {
      ...createDesignRouter("IncrementingCounter"),
    },
    {
      ...createDesignRouter("InfiniteScrolling"),
    },
    {
      ...createDesignRouter("InsectCatchGame"),
    },
    {
      ...createDesignRouter("KineticLoader"),
    },
    {
      ...createDesignRouter("LiveUserFilter"),
    },
    {
      ...createDesignRouter("MobileNavigation"),
    },
    {
      ...createDesignRouter("MobileTabNavigation"),
    },
    {
      ...createDesignRouter("MovieApp"),
    },
    {
      ...createDesignRouter("MovieSeatBooking"),
    },
    {
      ...createDesignRouter("NavigationMenuIndicator"),
    },
    {
      ...createDesignRouter("NotesApp"),
    },
    {
      ...createDesignRouter("ParallaxScrolling"),
    },
    {
      ...createDesignRouter("PasswordGenerator"),
    },
    {
      ...createDesignRouter("PasswordStrengthBackground"),
    },
    {
      ...createDesignRouter("Pokedex"),
    },
    {
      ...createDesignRouter("ProgressSteps"),
    },
    {
      ...createDesignRouter("QuizApp"),
    },
    {
      ...createDesignRouter("RandomChoicePicker"),
    },
    {
      ...createDesignRouter("RotatingNavigationAnimation"),
    },
    {
      ...createDesignRouter("ScrollAnimation"),
    },
    {
      ...createDesignRouter("SoundBoard"),
    },
    {
      ...createDesignRouter("SplitLandingPage"),
    },
    {
      ...createDesignRouter("StickyNavbar"),
    },
    {
      ...createDesignRouter("TestimonialBoxSwitcher"),
    },
    {
      ...createDesignRouter("ThemeClock"),
    },
    {
      ...createDesignRouter("ThreeDBackgroundBoxes"),
    },
    {
      ...createDesignRouter("ToastNotification"),
    },
    {
      ...createDesignRouter("TodoList"),
    },
    {
      ...createDesignRouter("VerifyAccountUi"),
    },
    {
      path: "*",
      element: <NotFount />,
    },
  ],
};

const router = createBrowserRouter([config]);

export default router;
