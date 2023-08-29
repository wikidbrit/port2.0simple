import { useState, useEffect, useMemo } from "react";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const useGetBreakpoints = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  });

  const breakPoint = useMemo(() => {
    switch (true) {
      case !!windowWidth && windowWidth > breakpoints.lg:
        return "Desktop";
      case !!windowWidth && windowWidth > breakpoints.md:
        return "Tablet";
      case !!windowWidth && windowWidth > breakpoints.sm:
        return "Mobile";
      default:
        return "Desktop";
    }
  }, [windowWidth]);

  const onResizeEvent = () => {
    setWindowWidth(window.innerWidth);
  };

  return {
    width: windowWidth,
    breakPoint,
    onResizeEvent,
    isMobile: breakPoint === "Mobile",
    isTablet: breakPoint === "Tablet",
    isDesktop: breakPoint === "Desktop",
  };
};

export default useGetBreakpoints;
