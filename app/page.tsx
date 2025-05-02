import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import type { Metadata } from "next";
import Four from "../components/four";
import Hero from "../components/hero";
import About from "../components/about";
import Blog from "../components/blog";
import { fetchBooks, fetchBlogs, fetchProfile } from "../lib/api";

// ✅ Always fetch fresh data like getServerSideProps
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Marypee Official | Mary Pat Mbamah Uzoma Books",
  description:
    "Marypee Official - Author of 'Misplaced Trust and the Power of Forgiveness.' Read her inspiring books and blogs on faith, heartbreak, and more.",
};

export default async function Home() {
  const [books, blogs, profile] = await Promise.all([
    fetchBooks(),
    fetchBlogs(),
    fetchProfile(),
  ]);

  return (
    <div>
      <Header books={books} />
      <Hero />
      <Four books={books} />
      <About profile={profile ?? null }/> 
      <Blog blogs={blogs} />
      <Footer books={books} profile={profile} />
    </div>
  );
}
