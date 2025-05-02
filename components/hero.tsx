import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-black text-white py-6 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 flex flex-col md:flex-row items-center">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-myred mb-3">OUT NOW —</h2>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
          FORGIVENESS WASN’T HER ESCAPE, IT WAS HER COMEBACK.
          </h1>
          <p className="text-sm md:text-base mb-5 text-gray-200 leading-relaxed">
            The story of heartbreak, betrayal, and forgiveness shook the heavens. She gave shelter to a stranger, but what she got in return was betrayal, chaos, and a test of faith. It’s a must-read for anyone who’s ever trusted the wrong person.
          </p>
   
          <Link href={"https://www.amazon.com/Misplaced-Trust-Power-Forgiveness-Uzoma-ebook/dp/B0F4966QSF/ref=sr_1_1?crid=GMLK34UV1EQD&dib=eyJ2IjoiMSJ9.mO9EAgtbOpB5kquKr-o6pg.7PKO3FjoeHdWXdbuQB9r8xo88XMtorGidKHr-bu9a1Y&dib_tag=se&keywords=MISPLACED+TRUST+AND+POWER+OF+FORGIVENESS&qid=1745963788&s=books&sprefix=misplaced+trust+and+power+of+forgiveness%2Cstripbooks-intl-ship%2C259&sr=1-1"} target='_blank'>  
          <button className="bg-myred text-white uppercase text-lg font-semibold px-8 py-4 rounded-full border-2 border-white/50 shadow-2xl hover:bg-opacity-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] hover:scale-110 transition-all duration-300 ease-in-out">
            Get the Book
          </button>
          </Link>

        </div>  

        <div className="md:w-1/2 flex justify-center md:justify-center">
          <Image
            src="/assets/images/MaryPatbook.webp"
            alt="Book Cover"
            width={320}
            height={480}
            className="max-w-[240px] md:max-w-[280px] lg:max-w-[340px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero