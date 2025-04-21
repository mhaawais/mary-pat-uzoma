import React from "react";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="bg-black text-white text-4xl font-bold text-center my-4 py-10 border-b-4 border-myred pb-3 w-fit mx-auto">
          MY BLOGS
        </h2>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-white max-w-xl mx-auto">
          Explore stories that inspire and provoke thought
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full">
        {/* Blog 1 */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col transform transition duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-white bg-gray-800 p-4 rounded-t-lg">
            <a href="/detailblog/blog1">
              BLOG 1: MISPLACED TRUST AND THE POWER OF FORGIVENESS
            </a>
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
            One measure of Kindness, One Stranger, One Decision That Swap
            Everything :
          </h3>
          <p className="text-gray-600 mt-2 flex-grow">
            In helping a person in need, how many risks or sacrifices would you
            undertake? Mary-Pat Uzoma didn't hesitate. While speaking with an
            expectant mother who unexpectedly called in a panicked state,
            Mary-Pat welcomed....
          </p>
          <a
            href="/detailblog/blog1"
            className="mt-4 inline-block bg-myred text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-300 text-center transform hover:scale-105"
          >
            Read More →
          </a>
        </div>

        {/* Blog 2 */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col transform transition duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-white bg-gray-800 p-4 rounded-t-lg">
            <a href="/detailblog/blog2">
              BLOG 2: FROM THE EYES OF <br /> A BABY
            </a>
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
            Seeing the World Through Newborn Eyes: A Book That Changes
            Everything :
          </h3>
          <p className="text-gray-600 mt-2 flex-grow">
            Have you ever asked yourself about the feelings of someone who
            encounters the world for the first time? To see light, faces, and
            movement, and to feel warmth, fear, love, and hunger, all without
            words? Nearly all of us look at a newborn and....
          </p>
          <a
            href="/detailblog/blog2"
            className="mt-4 inline-block bg-myred text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-300 text-center transform hover:scale-105"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;








// import React from 'react'
// import Image from 'next/image'

// const Blog = () => {
//   return (
//     <div className="min-h-screen bg-black text-white py-4 sm:py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-8 sm:mb-12">
//           <h2 className="bg-black text-white text-4xl font-bold text-center my-4 py-10 border-b-4 border-myred pb-3 w-fit mx-auto">
//             MY BLOGS
//           </h2>
//           <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-white max-w-xl mx-auto">
//             Explore stories that inspire and provoke thought
//           </p>
//         </div>

//         {/* Blog Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
//           {/* Blog 1 */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
//             <div className="w-full h-40 sm:h-48 lg:h-56 relative">
//               <Image
//                 src="/assets/images/1.jpg"
//                 alt="Blog 1 Image"
//                 width={600}
//                 height={300}
//                 className="object-cover w-full h-full rounded-t-lg"
//               />
//             </div>
//             <div className="p-4 sm:p-5 lg:p-6">
//               <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black mb-2">
//                 <a
//                   href="/detailblog/blog1"
//                   className="hover:text-red-600 transition-colors duration-200"
//                 >
//                   Misplaced Trust and the Power of Forgiveness
//                 </a>
//               </h2>
//               <h3 className="text-sm sm:text-base lg:text-lg font-medium text-red-600 mb-2">
//                 One Act of Kindness, One Stranger
//               </h3>
//               <p className="text-black text-xs sm:text-sm lg:text-base mb-4 line-clamp-3">
//                 In helping a person in need, how many risks would you take? Mary-Pat Uzoma didn't hesitate when an expectant mother called in panic...
//               </p>
//               <a
//                 href="/detailblog/blog1"
//                 className="block w-full bg-red-600 text-white text-center text-xs sm:text-sm lg:text-base font-medium py-2 px-4 rounded hover:bg-red-700 hover:scale-105 transition-all duration-300 group"
//               >
//                 Read More
//               </a>
//             </div>
//           </div>

//           {/* Blog 2 */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
//             <div className="w-full h-40 sm:h-48 lg:h-56 relative">
//               <Image
//                 src="/assets/images/2.jpg"
//                 alt="Blog 2 Image"
//                 width={600}
//                 height={300}
//                 className="object-cover w-full h-full rounded-t-lg"
//               />
//             </div>
//             <div className="p-4 sm:p-5 lg:p-6">
//               <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black mb-2">
//                 <a
//                   href="/detailblog/blog2"
//                   className="hover:text-red-600 transition-colors duration-200"
//                 >
//                   From the Eyes of a Baby
//                 </a>
//               </h2>
//               <h3 className="text-sm sm:text-base lg:text-lg font-medium text-red-600 mb-2">
//                 A Newborn's Perspective
//               </h3>
//               <p className="text-black text-xs sm:text-sm lg:text-base mb-4 line-clamp-3">
//                 Ever wondered how a newborn experiences the world? Seeing light, faces, and feeling warmth, fear, and love without words...
//               </p>
//               <a
//                 href="/detailblog/blog2"
//                 className="block w-full bg-red-600 text-white text-center text-xs sm:text-sm lg:text-base font-medium py-2 px-4 rounded hover:bg-red-700 hover:scale-105 transition-all duration-300 group"
//               >
//                 Read More
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Blog
