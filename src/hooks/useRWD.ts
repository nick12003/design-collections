import { useEffect, useState } from "react";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const useRWD = () => {
  const [currentSize, setCurrentSize] = useState<keyof typeof breakpoints>("2xl");

  useEffect(() => {
    const handleWindowSizeChange = () => {
      const windowWidth = window.innerWidth;
      const activeSize = Object.entries(breakpoints).find(
        ([, width]) => windowWidth < width
      )?.[0] as keyof typeof breakpoints;
      setCurrentSize(activeSize ?? "2xl");
    };

    // Initial check
    handleWindowSizeChange();

    // Add event listeners for window resize
    window.addEventListener("resize", handleWindowSizeChange);

    // Clean up event listeners when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return currentSize;
};

export default useRWD;
