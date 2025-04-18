import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Four from "@/components/four";
import Hero from "@/components/hero";
import About from "@/components/about";
import Blog from "@/components/blog";

export const metadata: Metadata = {
  title: "Home - Marry Pat Uzoma", // Title for the Home page
  description: "Welcome to the home page of My Website",
};

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Four />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}
