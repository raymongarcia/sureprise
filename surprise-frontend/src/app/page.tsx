import * as React from "react";
import Header from "./components/layout/Header/Header";
import Hero from "./components/layout/Hero/Hero";
import Trending from "./components/layout/Trending/Trending"
import Categories from "./components/layout/Categories/Categories";

export default function Home() {
  return (
    <div className="bg-[#e7e8ec] min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Hero />
      <Trending />
      <Categories />
    </div>
  );
}
