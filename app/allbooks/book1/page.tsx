import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Books - Marry Pat Uzoma", 
  description: "Book: Misplaced Trust and the Power of Forgiveness - By Mary Pat Mbamah Uzoma. A story of betrayal and forgiveness.",
};

const Book1 = () => {
  return (
    <section>
      <Header />
      <div className="relative w-full bg-black py-16 md:py-20 lg:py-24">
        <div className="container mx-auto flex flex-col justify-center items-center px-4">
          <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white border-t-2 border-b-2 border-myred py-4 mb-8">
            BOOKS
          </h2>
          <div className="flex items-center gap-3">
            <Link href="/">
              <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200 underline cursor-pointer">
                HOME
              </p>
            </Link>
            <FaChevronRight className="text-myred text-lg md:text-xl" />
            <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200">
              BOOK
            </p>
          </div>
        </div>
      </div>

      <div className='w-full bg-black px-6 md:px-10 lg:px-20'>
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-myred text-center pb-8 underline hover:text-white transition duration-200">
            MISPLACED TRUST AND THE POWER OF FORGIVENESS
          </h2>
           <Image
             src={"/assets/images/marry4.webp"}
             alt="book1"
             height={350}
             width={250}
            /> 
      </div>

      <Footer />
    </section>
  );
};

export default Book1;