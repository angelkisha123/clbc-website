"use client";

import Hero from "./home/sections/Hero";
import About from "./home/sections/About";
import JoinUs from "./home/sections/JoinUs";
import Ministries from "./home/sections/Ministries";
import Programs from "./home/sections/Programs";
import Osk from "./home/sections/Osk";
import Events from "./home/sections/Events";
import Giving from "./home/sections/Giving";
import FloatingCTA from "./home/sections/FloatingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <JoinUs />
      <Ministries />
      <Programs />
      <Osk />
      <Events />
      <Giving />
      <FloatingCTA />
    </>
  );
}
