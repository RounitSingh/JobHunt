import React from "react";
import CenterImage from "./CenterImage";
import ParallaxImages from "./ParallaxImages";

const Hero = () => {
  const SECTION_HEIGHT = 1500;

  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

export default Hero;
