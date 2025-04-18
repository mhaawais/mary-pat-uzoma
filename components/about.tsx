import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      
      {/* Left Side - Split Background + Image aligned right */}
      <div className="w-full md:w-1/2 relative flex items-center justify-end bg-black h-[60vh] md:h-screen">
        {/* Background Image covers 65% of the left side */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-[75%] bg-cover bg-center z-0"
          style={{ backgroundImage: `url(/assets/images/book.jpg)` }}
        ></div>

        {/* Foreground Image (Mary Pat) aligned right */}
        <div className="relative z-10 w-72 h-72 md:w-96 md:h-96 mr-4 md:mr-12">
          <Image 
            src="/assets/images/marypatpic.jpg" 
            alt="Mary Pat" 
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 bg-black flex flex-col justify-center p-6 md:p-12">
        <h3 className="text-myred text-lg md:text-xl font-semibold uppercase tracking-wide">
          ABOUT MARRY ——
        </h3>
        <h2 
          className="text-white text-3xl md:text-4xl font-bold leading-tight mt-2"
          style={{ textShadow: '1px 1px 2px #ffffff' }}
        >
          Mary Pat Mbamah Uzoma (Marypee):<br />
          <span className='text-2xl md:text-3xl'>A Life of Faith, Strength, and Purpose</span>
        </h2>
        <p className="text-white text-base md:text-lg mt-6 leading-relaxed">
          Mary Pat Uzoma, affectionately known as Marypee, was born and raised in Eastern Nigeria, 
          in the heart of Igbo land. From early on, she had a passion for learning and uplifting others. 
          She graduated from Awka College of Education in Anambra State with a Nigerian Certificate 
          in Education, a milestone that began her lifelong love for teaching and making a difference 
          in people’s lives.
        </p>
        <Link href={"/author"}>
        <button 
          className="mt-8 px-5 py-3 bg-myred text-white font-semibold rounded-full 
                     border-2 border-myred shadow-lg hover:bg-transparent 
                     hover:border-myred hover:shadow-myred/50 transition-all duration-300 w-36 self-start"
        >
          LEARN MORE
        </button>
        </Link>
      </div>
    </section>
  );
};

export default About;