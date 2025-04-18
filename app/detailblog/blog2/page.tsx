import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog - Marry Pat Uzoma",
  description: "Read my all Blogs here",
};

const Blog2 = () => {
  return (
    <section>
      <Header />
      {/* Hero Section */}
      <div
        className="relative w-full bg-cover bg-center py-16 md:py-20 lg:py-24"
        style={{
          backgroundImage: "url('/assets/images/Tim-Follow.jpg')",
        }}
      >
        <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-0" />
        <div className="container mx-auto flex flex-col justify-center items-center px-4 relative z-10">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white underline mb-8 hover:text-myred transition duration-200">
            FROM THE EYES OF A BABY
          </h2>
          <div className="flex items-center gap-3">
            <Link href="/">
              <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200 underline cursor-pointer">
                HOME
              </p>
            </Link>
            <FaChevronRight className="text-myred text-lg md:text-xl" />
            <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200">
              BLOG
            </p>
          </div>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="w-full bg-black py-16 px-6 md:px-10 lg:px-20">
        <h2 className="text-myred text-2xl md:text-4xl font-bold text-center mb-10">
          Seeing the World Through Newborn Eyes:<br />A Book That Changes Everything
        </h2>
        <div className="w-full text-white text-base md:text-lg space-y-6 leading-relaxed tracking-tight max-w-4xl mx-auto">
          <p>
            Have you ever asked yourself about the feelings of someone who encounters the world for the first time?
          </p>
          <p>
            To see light, faces, and movement, and to feel warmth, fear, love, and hunger, all without words?
          </p>
          <p>
            Nearly all of us look at a newborn and see someone small, helpless, beautiful. But very few of us pause long enough to think:
          </p>
          <p className="italic pl-4 border-l-4 border-myred">
            What does everything look like through their eyes? <br />
            What are their feelings? <br />
            Or Searching for?
          </p>
          <p className="font-semibold">
            That's precisely what this heartwarming, deeply insightful book reveals.
          </p>
          <p>
            This book provides deeper baby advice than the regular tips and tricks typically offered. It leads readers to experience a peaceful, deep examination of a newborn's emotional state.
          </p>
          <p>
            The book begins with a direct account of a baby's experience, revealing that their vocalizations serve as meaningful communications, not random noises.
          </p>
          <p>
            Their need to touch goes beyond instinct to intense cravings. Their gaze is not just curiosity but a search for connection.
          </p>
          <p className="text-lg font-semibold">
            And once you do, you’ll never look at a baby the same way again.
          </p>
          <p>
            People from all walks of life, including first-time parents, grandparents, and caregivers, along with those who love watching life's beauty, will discover a unique perspective in this book, revealing the inner nature of newborns.
          </p>
          <p className="uppercase font-bold">
            Hence, this book is "a lens into the soul of a newborn."
          </p>
          <p>
            It challenges us to stop seeing babies as blank vessels and start seeing them as emotional beings, full of wonders and needs, arriving in a brand-new and overwhelming world.
          </p>
          <p className="font-semibold italic">
            It’s a book that doesn’t just inform … it transforms.
          </p>
          <p>
            Mary Pee, the loving grandmother, generously dispenses wisdom and affection on each page of her writing...
          </p>
          <p className="italic">
            Dedicated to her grandchildren and future generations, her words echo a prayer that resonates deeply:
          </p>
          <p className="pl-4 border-l-4 border-myred italic">
            “May parents be given the wisdom to guide their children,<br />
            and may children grow into the true purpose of their lives.”
          </p>
          <p>
            Reading a book that originates from love offers an extraordinary experience that combines education with inspiration, uplifting messages, and emotional connections.
          </p>
          <p className="text-lg font-medium">
            The book will transform your perspective about parenthood and child development by opening your emotions.
          </p>
          <p>
            The learning process will surpass caretaker roles to develop your abilities as a compassionate, connected, and confident baby caregiver.
          </p>
          <p className="uppercase font-semibold">
            Because when you truly see the world through a newborn’s eyes... you begin to see everything differently.
          </p>
          <p className="text-center text-myred font-bold text-xl">
            And maybe… just maybe… that’s where real parenting begins!
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Blog2;
