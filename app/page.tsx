import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Four from "@/components/four";
import Hero from "@/components/hero";
import About from "@/components/about";
import Blog from "@/components/blog";

export const metadata: Metadata = {
  title: "Home - Marry Pat Uzoma",  
  description: "Marypee Official - Author of 'Misplaced Trust and the Power of Forgiveness.' Read her inspiring books and blogs on faith, heartbreak, and more.",

};

export default function Home() {

  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <Four />
      <About />
      <Blog />
      <Footer />
    </div>
);
}
