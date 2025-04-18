import React from 'react'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full">
        {/* Blog 1 */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col transform transition duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-white bg-gray-800 p-4 rounded-t-lg">
            <a href="/detailblog/blog1">BLOG 1: MISPLACED TRUST AND THE POWER OF FORGIVENESS</a>
          </h2>
          <div className="w-full max-w-full h-auto mt-4">
            <Image
              src="/assets/images/1.jpg"
              alt="Blog 1 Image"
              width={400}
              height={200}
              layout="responsive"
              objectFit="scale-down"
              className="rounded-md"
            />
          </div>
          <h3 className="text-lg font-semibold text-myred mt-4">
            One measure of Kindness, One Stranger, One Decision That Swap Everything :
          </h3>
          <p className="text-gray-600 mt-2 flex-grow">
            In helping a person in need, how many risks or sacrifices would you undertake?
            Mary-Pat Uzoma didn't hesitate. While speaking with an expectant mother who unexpectedly called in a panicked state, Mary-Pat welcomed....
          </p>
          <a
            href="/detailblog/blog1"
            className="mt-4 inline-block bg-myred text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-300 text-center transform hover:scale-105"
          >
            Read More
          </a>
        </div>

        {/* Blog 2 */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col transform transition duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-white bg-gray-800 p-4 rounded-t-lg">
            <a href="/detailblog/blog2">BLOG 2: FROM THE EYES OF <br /> A BABY</a>
          </h2>
          <div className="w-full max-w-full h-auto mt-4">
            <Image
              src="/assets/images/2.jpg"
              alt="Blog 2 Image"
              width={400}
              height={200}
              layout="responsive"
              objectFit="scale-down"
              className="rounded-md"
            />
          </div>
          <h3 className="text-lg font-semibold text-myred mt-4">
            Seeing the World Through Newborn Eyes: A Book That Changes Everything :
          </h3>
          <p className="text-gray-600 mt-2 flex-grow">
            Have you ever asked yourself about the feelings of someone who encounters the world for the first time?
            To see light, faces, and movement, and to feel warmth, fear, love, and hunger, all without words?
            Nearly all of us look at a newborn and....
          </p>
          <a
            href="/detailblog/blog2"
            className="mt-4 inline-block bg-myred text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-300 text-center transform hover:scale-105"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export default Blog