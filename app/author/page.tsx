import React from "react";
import { fetchBooks, fetchProfile } from "../../lib/api";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FaChevronRight } from "react-icons/fa";

// ✅ This forces the page to always render server-side on each request
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const profile = await fetchProfile();
  if (!profile) {
    return {
      title: "Author Not Found",
      description: "The author profile could not be found.",
    };
  }
  return {
    title: `${profile.name} - Mary Pat Uzoma`,
    description: profile.bio,
  };
}

export default async function AuthorPage() {
  const [books, profile] = await Promise.all([fetchBooks(), fetchProfile()]);

  if (!profile) {
    notFound();
  }

  return (
    <section>
      <Header books={books} />

      {/* Hero Section */}
      <div className="relative w-full bg-black py-16 md:py-20 lg:py-24">
        <div className="container mx-auto flex flex-col justify-center items-center px-4">
          <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white border-t-2 border-b-2 border-myred py-4 mb-8">
            AUTHOR
          </h2>
          <div className="flex items-center gap-3">
            <Link href="/">
              <p className="text-lg md:text-xl font-bold text-white hover:text-myred underline transition">
                HOME
              </p>
            </Link>
            <FaChevronRight className="text-myred text-lg md:text-xl" />
            <p className="text-lg md:text-xl font-bold text-white">AUTHOR</p>
          </div>
        </div>
      </div>

      {/* About Author Section */}
      <div className="bg-black py-16 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Dynamic Image from API */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <Image
                src={profile.image}
                alt="Marypee"
                width={600}
                height={750}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Static Bio Content */}
            <div className="w-full lg:w-2/3">
              <h4 className="text-myred text-xl md:text-2xl font-bold tracking-wide mb-2 uppercase">
                ABOUT MARY —— 
              </h4>
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-left drop-shadow-[0_0_20px_theme('colors.myred')]">
                Mary Pat Mbamah Uzoma (Marypee): A Life of Faith, Strength, and Purpose
              </h2>
              <div className="text-white text-base md:text-lg space-y-6 leading-relaxed">
                <p>Mary Pat Uzoma, affectionately known as Marypee, was born and raised in Eastern Nigeria, in the heart of Igbo land...</p>
                <p>Driven by determination and dreams of a brighter future, Marypee relocated to the United States of America...</p>
              </div>
            </div>
          </div>

          <div className="w-full text-white text-base md:text-lg space-y-6 leading-relaxed mt-4">
            <p>But her ambitions didn’t stop there. Marypee also became a licensed real estate agent...</p>
            <p>Life brought its share of storms. Marypee endured serious health challenges and a painful divorce...</p>
            <p>She is the proud mother of three children...</p>
            <p>Marypee is more than her titles and accomplishments...</p>
            <p>Her life is a living proof of the scripture...</p>
            <p>Today, Marypee stands as a shining example of what it means to live with purpose, love, and unwavering faith...</p>
          </div>
        </div>
      </div>

      <Footer books={books} profile={profile} />
    </section>
  );
}
