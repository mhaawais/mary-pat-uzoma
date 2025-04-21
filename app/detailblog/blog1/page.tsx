import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import Header from '@/components/header';
import Footer from '@/components/footer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Marry Pat Uzoma",
  description: "Blog: Misplaced Trust and the Power of Forgiveness - Mary Pat Mbamah Uzoma shares insights on trust, betrayal, and healing.",
};

const Blog1 = () => {
  return (
    <section>
      <Header />
      {/* Hero Section */}
      <div
        className="relative w-full bg-cover bg-center py-16 md:py-20 lg:py-24"
        style={{ backgroundImage: "url('/assets/images/Tim-Follow.jpg')" }}
      >
        <div className="bg-black/60 absolute inset-0 z-0" />
        <div className="container mx-auto flex flex-col justify-center items-center px-4 relative z-10">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-8 underline hover:text-myred transition duration-200">
            MISPLACED TRUST AND THE POWER OF FORGIVENESS
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
          One measure of Kindness, One Stranger, One Decision<br />That Swap Everything
        </h2>
        <div className="w-full text-white text-base md:text-lg space-y-6 leading-relaxed tracking-tight max-w-4xl mx-auto">
          <p>
            In helping a person in need, how many risks or sacrifices would you undertake?
          </p>
          <p className="text-lg font-semibold">
            Mary-Pat Uzoma didn't hesitate. While speaking with an expectant mother who unexpectedly called in a panicked state, Mary-Pat welcomed her into her home with complete compassion. It was an act of Trust, of love, of doing the “right thing.”
          </p>
          <p>
            The initial display of Kindness between them turned into something sinister and destructive. Without expecting it, the newcomer she invited into her home started dismantling the structure of everything meaningful to Mary-Pat, including her marriage, the security of her living space, and personal Trust.
          </p>
          <p className="uppercase font-bold text-lg">
            What happened in the following months would test every ounce of strength, faith, and forgiveness Mary-Pat had left.
          </p>
          <p className="italic">
            But here’s the thing: this isn’t a story of destruction.
          </p>
          <p>
            The path to divine redemption forms the core of this story, although its path toward salvation remains a surprise to many. It's not what you think… <span className="font-bold uppercase">IN FACT...</span> You’ll be turning pages, heart pounding, asking:
          </p>
          <p className="pl-4 border-l-4 border-myred italic">
            "How could someone do that?"<br />
            "Why didn’t she see it coming?"<br />
            "What happened to the child born in the middle?"
          </p>
          <p>
            And when you come across the part where betrayal reaches its climax…
          </p>
          <p className="font-bold text-lg">
            Mary-Pat doesn't fall.
          </p>
          <p className="uppercase font-semibold">
            She rebels, and you’ll want to know exactly how.
          </p>
          <p>
            If you’ve ever trusted someone and regretted it...
          </p>
          <p>
            If you’ve ever struggled to forgive when it felt impossible...
          </p>
          <p>
            If you believe in second chances, healing, and a God who never wastes pain...
          </p>
          <p className="text-myred font-bold text-xl drop-shadow-none">
            This book is your next must-read :
          </p>
          <p className="text-center font-semibold text-lg">
            Grab your copy of <br /><span className="uppercase  underline decoration-myred">Misplaced Trust and the Power of Forgiveness</span>
          </p>
          <p className="text-center font-medium">
            …and discover what happens when heartbreak meets heaven's healing hand.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Blog1;
