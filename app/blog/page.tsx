import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import type { Metadata } from "next";
import Blog from '@/components/blog';

export const metadata: Metadata = {
   title: "Blog - Marry Pat Uzoma",
   description: "Read my all Blogs here",
};

const Myblog = () => {
  return (
    <section>
        <Header />
    <div className="relative w-full bg-black py-16 md:py-20 lg:py-24">
      <div className="container mx-auto flex flex-col justify-center items-center px-4">
        <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white border-t-2 border-b-2 border-myred py-4 mb-8">
          OUR BLOGS
        </h2>
        <div className="flex items-center gap-3">
          <Link href="/">
            <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200 underline cursor-pointer">
              HOME
            </p>
          </Link>
          <FaChevronRight className="text-myred text-lg md:text-xl" />
          <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200">
            Blog
          </p>
        </div>
      </div>
    </div>
    <Blog />
    <Footer />
    </section>
  );
};

export default Myblog;
