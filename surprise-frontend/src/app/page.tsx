import * as React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Trending from "./components/Trending/Trending"
import Categories from "./components/Categories/Categories";

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
