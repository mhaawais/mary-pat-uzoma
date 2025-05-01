"use client"
import Image from "next/image"
import Link from "next/link"
import type { Book } from "@/lib/api"

interface FourProps {
  books: Book[]
}

const Four = ({ books }: FourProps) => {
  return (
    <section className="bg-black py-3 px-8">
      <div className="max-w-5xl mx-auto -mt-4 -mb-4">
        <h2 className="text-white text-4xl font-bold my-2 border-b-4 border-myred pb-3 w-fit mx-auto">BOOKS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 my-20">
          {books.map((book) => (
            <div key={book.id} className="relative aspect-[3/4] flex flex-col items-center">
              <Link href={`/allbooks/${book.slug || `book-${book.id}`}`} className="relative w-full aspect-[3/4] block">
                <div className="relative w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-2 shadow-white/60 perspective-300 group">
                  <Image
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:rotateY-2 group-hover:scale-105"
                    style={{ transform: "perspective(1000px) rotateY(2deg)" }}
                  />
                </div>
              </Link>
              <Link href={`/allbooks/${book.slug || `book-${book.id}`}`}>
                <button className="bg-myred text-white py-3 px-8 rounded-full text-base font-medium cursor-pointer mt-10 transition-all duration-300 ease-in-out hover:bg-[#b32d37] hover:scale-110 hover:ring-1 hover:ring-white shadow-sm shadow-white/20">
                  Read more
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Four








// "use client"
// import Image from "next/image"
// import Link from "next/link"
// import type { Book } from "@/lib/api"

// interface FourProps {
//   books: Book[]
// }

// const Four = ({ books }: FourProps) => {
//   return (
//     <section className="bg-black py-3 px-8">
//       <div className="max-w-5xl mx-auto -mt-4 -mb-4">
//         <h2 className="text-white text-4xl font-bold my-2 border-b-4 border-myred pb-3 w-fit mx-auto">BOOKS</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 my-20">
//           {books.map((book) => (
//             <div key={book.id} className="relative aspect-[3/4] flex flex-col items-center">
//               <Link href={`/allbooks/${book.slug}`} className="relative w-full aspect-[3/4] block">
//                 <div className="relative w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-2 shadow-white/60 perspective-300 group">
//                   <Image
//                     src={book.image || "/placeholder.svg"}
//                     alt={book.title}
//                     fill
//                     className="object-cover transition-transform duration-500 ease-in-out group-hover:rotateY-2 group-hover:scale-105"
//                     style={{ transform: "perspective(1000px) rotateY(2deg)" }}
//                   />
//                 </div>
//               </Link>
//               <Link href={`/allbooks/${book.slug}`}>
//                 <button className="bg-myred text-white py-3 px-8 rounded-full text-base font-medium cursor-pointer mt-10 transition-all duration-300 ease-in-out hover:bg-[#b32d37] hover:scale-110 hover:ring-1 hover:ring-white shadow-sm shadow-white/20">
//                   Read more
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Four







// "use client"

// import { useEffect, useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { fetchBooks } from "@/lib/api"

// type Book = {
//   id: string
//   title: string
//   description: string
//   image: string
//   createdAt: string
// }

// const Four = () => {
//   const [books, setBooks] = useState<Book[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     async function loadBooks() {
//       setLoading(true)
//       const data = await fetchBooks()
//       setBooks(data)
//       setLoading(false)
//     }

//     loadBooks()
//   }, [])

//   // Fallback books if API fails or returns empty
//   const fallbackBooks = [
//     { id: "1", title: "Misplaced Trust", image: "/assets/images/marry4.webp", link: "/allbooks/book1" },
//     { id: "2", title: "From The Eyes Of A Baby", image: "/assets/images/from2.jpg", link: "/allbooks/book2" },
//     { id: "3", title: "Wisdom From A Woman", image: "/assets/images/wisdom3.jpg", link: "/allbooks/book3" },
//     { id: "4", title: "Building A Functional Home", image: "/assets/images/building1.jpg", link: "/allbooks/book4" },
//   ]

//   // Use admin panel books if available, otherwise use fallback
//   const displayBooks =
//     books.length > 0
//       ? books.map((book) => ({
//           id: book.id,
//           title: book.title,
//           image: book.image || `/assets/images/marry4.webp`, // Fallback image
//           link: `/allbooks/${book.id}`,
//         }))
//       : fallbackBooks

//   return (
//     <section className="bg-black py-3 px-8">
//       <div className="max-w-5xl mx-auto -mt-4 -mb-4">
//         <h2 className="text-white text-4xl font-bold my-2 border-b-4 border-myred pb-3 w-fit mx-auto">BOOKS</h2>

//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-myred"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 my-20">
//             {displayBooks.map((book, index) => (
//               <div key={book.id} className="relative aspect-[3/4] flex flex-col items-center">
//                 <Link href={book.link} className="relative w-full aspect-[3/4] block">
//                   <div className="relative w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-2 shadow-white/60 perspective-300 group">
//                     <Image
//                       src={book.image || "/placeholder.svg"}
//                       alt={book.title}
//                       fill
//                       className="object-cover transition-transform duration-500 ease-in-out group-hover:rotateY-2 group-hover:scale-105"
//                       style={{ transform: "perspective(1000px) rotateY(2deg)" }}
//                     />
//                   </div>
//                 </Link>

//                 <Link href={book.link}>
//                   <button className="bg-myred text-white py-3 px-8 rounded-full text-base font-medium cursor-pointer mt-10 transition-all duration-300 ease-in-out hover:bg-[#b32d37] hover:scale-110 hover:ring-1 hover:ring-white shadow-sm shadow-white/20">
//                     Read more
//                   </button>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }

// export default Four





// "use client";
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: "Books Collection - Marry Pat Uzoma",
//   description: "Books by Mary Pat Mbamah Uzoma - Explore her inspiring collection, including 'Misplaced Trust and the Power of Forgiveness.",
// };

// const Four = () => {
//   const books = [
//     { src: '/assets/images/marry4.webp', link: '/allbooks/book1' },
//     { src: '/assets/images/from2.jpg', link: '/allbooks/book2' },
//     { src: '/assets/images/wisdom3.jpg', link: '/allbooks/book3' },
//     { src: '/assets/images/building1.jpg', link: '/allbooks/book4' },
//   ];

//   return (
//     <section className="bg-black py-3 px-8">
//       <div className="max-w-5xl mx-auto -mt-4 -mb-4">
//         <h2 className="text-white text-4xl font-bold my-2 border-b-4 border-myred pb-3 w-fit mx-auto">
//           BOOKS
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 my-20">
//           {books.map((book, index) => (
//             <div
//               key={index}
//               className="relative aspect-[3/4] flex flex-col items-center"
//             >

//              <Link href={book.link} className="relative w-full aspect-[3/4] block">
//                 <div className="relative w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-2 shadow-white/60 perspective-300 group"> {/* Added perspective and group */}
//                  <Image
//                    src={book.src}
//                    alt={`Book ${index + 1}`}
//                    fill
//                    className="object-cover transition-transform duration-500 ease-in-out group-hover:rotateY-2 group-hover:scale-105"
//                    style={{ transform: 'perspective(1000px) rotateY(2deg)' }}
//                   />
//                 </div>
//              </Link>

//                {/*<Link href={book.link} className="relative w-full aspect-[3/4] block">
//                 <div className="relative w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-115 hover:-translate-y-3 border-2 border-myred rounded-lg shadow-lg shadow-white/60 
//                   sm:scale-100 scale-90">
//                   <Image
//                     src={book.src}
//                     alt={`Book ${index + 1}`}
//                     fill
//                     className="object-cover rounded-lg"
//                     style={{ transform: 'perspective(1000px) rotateY(2deg)' }}
//                   />
//                 </div>
//               </Link>*/}


//               <Link href={book.link}>
//                 <button
//                   className="bg-myred text-white py-3 px-8 rounded-full text-base font-medium cursor-pointer mt-10 transition-all duration-300 ease-in-out hover:bg-[#b32d37] hover:scale-110 hover:ring-1 hover:ring-white shadow-sm shadow-white/20"
//                 >
//                   Read more
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Four;
