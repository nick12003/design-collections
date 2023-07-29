import { createBrowserRouter } from "react-router-dom";

import Layout from "@/Layout";
import NotFount from "@/components/NotFount";
import DocumentTitle from "@/components/DocumentTitle";
import Project from "@/components/Project";
import Home from "@/pages/Home";

const createDesignRouter = (projectName) => {
  return {
    path: projectName,
    element: <Project projectName={projectName} />,
    loader: async () => {
      const jsResponse = await fetch(
        `https://api.github.com/repos/nick12003/design-collections/contents/src/pages/collections/${projectName}/index.jsx`
      );
      const cssResponse = await fetch(
        `https://api.github.com/repos/nick12003/design-collections/contents/src/pages/collections/${projectName}/style.module.scss`
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
