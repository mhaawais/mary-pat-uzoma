"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";
import type { Book, Profile } from "@/lib/api";

interface FooterProps {
  books?: Book[];
  profile: Profile | null; // Changed from profile?: Profile
}

const Footer = ({ books = [], profile }: FooterProps) => {
  const [isOpen, setIsOpen] = useState(false); // Hamburger nav
  const [isBooksOpen, setIsBooksOpen] = useState(false); // Books dropdown
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  // Use fallback books if none are provided
  const displayBooks =
    books.length > 0
      ? books
      : [
          { id: "1", title: "Misplaced Trust & Power", slug: "book1", image: "", description: "" },
          { id: "2", title: "From The Eyes Of A Baby", slug: "book2", image: "", description: "" },
          { id: "3", title: "Wisdom From A Woman", slug: "book3", image: "", description: "" },
          { id: "4", title: "Building A Functional Home", slug: "book4", image: "", description: "" },
        ];

  // Use fallback profile if none is provided
  const displayProfile = profile || {
    name: "MARY PAT UZOMA NÉE MBAMAH",
    title: "NURSE. EDUCATOR. REAL ESTATE INVESTOR. WOMAN OF FAITH.",
    bio: "Originally from Igbo land in Eastern Nigeria. After earning her magna cum laude nursing degree in the U.S., she served passionately for 37 years in healthcare. Her life's journey rooted in faith, resilience, and purpose inspires her writing.",
    shortBio: "",
    image: "",
    galleryImages: [],
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleBooks = () => {
    if (isBooksOpen) {
      setIsBooksOpen(false);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    } else {
      setIsBooksOpen(true);
      if (closeTimer.current) clearTimeout(closeTimer.current);
      closeTimer.current = setTimeout(() => setIsBooksOpen(false), 1 * 60 * 1000);
    }
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <footer className="text-gray-600 body-font bg-black py-10 md:py-16">
      <div className="container px-5 md:px-14 lg:px-20 mx-auto flex flex-col items-center">
        {/* Logo + Heading */}
        <Link href="/" className="flex items-center space-x-3 mb-6">
          <Image src="/assets/logo/Author logo (webp).webp" alt="Logo" width={45} height={45} className="w-11 h-11" />
          <h1 className="text-xl md:text-2xl font-semibold text-myred font-custom">MARY PAT UZOMA</h1>
        </Link>
        {/* Mobile Menu Button */}
        <div className="md:hidden mb-4">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
          </button>
        </div>
        {/* Navigation */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:justify-center md:space-x-8 text-white font-medium text-lg space-y-4 md:space-y-0 items-center w-full md:w-auto`}
        >
          {/* BOOKS Dropdown */}
          <div
            className="relative flex flex-col items-center w-full md:w-auto"
            onMouseEnter={toggleBooks}
            onClick={toggleBooks}
          >
            <button className="flex items-center text-myred hover:text-onhover">
              BOOKS <FaChevronDown className="ml-1" />
            </button>
            {isBooksOpen && (
              <div className="mt-4 bg-white rounded-lg shadow-xl px-4 py-3 w-full md:w-auto flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-sm md:text-base text-black font-semibold z-20">
                {displayBooks.map((book) => (
                  <Link
                    key={book.id}
                    href={`/allbooks/${book.slug}`}
                    className="hover:bg-myred hover:text-white px-3 py-2 rounded w-full text-center md:w-auto"
                  >
                    {book.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/author" className="hover:text-myred w-full text-center md:w-auto">
            AUTHOR
          </Link>
          <Link href="/blog" className="hover:text-myred w-full text-center md:w-auto">
            BLOG
          </Link>
          <Link href="/contactus" className="hover:text-myred w-full text-center md:w-auto">
            CONTACT US
          </Link>
        </nav>
        {/* Horizontal line under navigation */}
        <div className="w-full mt-6 md:mt-8">
          <div className="border-b-2 border-myred px-4 md:px-8 lg:px-20" />
        </div>
        {/* Author Bio Section */}
        <div className="w-full mt-8 text-white text-center px-4 md:px-8 lg:px-20">
          <h2 className="text-xl md:text-2xl font-semibold text-myred mb-4">{displayProfile.name}</h2>
          <p className="text-base md:text-lg font-medium mb-4">{displayProfile.title}</p>
          <p className="text-sm md:text-base leading-relaxed">{displayProfile.bio}</p>
          <p className="text-sm md:text-base leading-relaxed mt-4">
            Originally from Igbo land in Eastern Nigeria. After earning her magna cum laude nursing degree in the U.S.,
            she served passionately for 37 years in healthcare. Her life’s journey rooted in faith, resilience, and purpose
            inspires her writing. She has authored several books, including one that shares her powerful testimony of God’s
            grace through trials and triumphs.
          </p>
          <p className="text-sm md:text-base leading-relaxed mt-4">
            With every page you flip, Marypee's mission remains clear: to share stories that honor God and encourage others
            to trust His plan.
          </p>
        </div>
        {/* Horizontal line under bio */}
        <div className="w-full mt-8">
          <div className="border-b-2 border-white px-4 md:px-8 lg:px-20" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;





// "use client"
// import { useState, useEffect, useRef } from "react"
// import Image from "next/image"
// import { FaBars, FaTimes } from "react-icons/fa"
// import { FaChevronDown } from "react-icons/fa6"
// import Link from "next/link"
// import type { Book, Profile } from "@/lib/api"

// interface FooterProps {
//   books?: Book[]
//   profile?: Profile
// }

// const Footer = ({ books = [], profile }: FooterProps) => {
//   const [isOpen, setIsOpen] = useState(false) // Hamburger nav
//   const [isBooksOpen, setIsBooksOpen] = useState(false) // Books dropdown
//   const closeTimer = useRef<NodeJS.Timeout | null>(null)

//   // Use fallback books if none are provided
//   const displayBooks =
//     books.length > 0
//       ? books
//       : [
//           { id: "1", title: "Misplaced Trust & Power", slug: "book1", image: "", description: "" },
//           { id: "2", title: "From The Eyes Of A Baby", slug: "book2", image: "", description: "" },
//           { id: "3", title: "Wisdom From A Woman", slug: "book3", image: "", description: "" },
//           { id: "4", title: "Building A Functional Home", slug: "book4", image: "", description: "" },
//         ]

//   // Use fallback profile if none is provided
//   const displayProfile = profile || {
//     name: "MARY PAT UZOMA NÉE MBAMAH",
//     title: "NURSE. EDUCATOR. REAL ESTATE INVESTOR. WOMAN OF FAITH.",
//     bio: "Originally from Igbo land in Eastern Nigeria. After earning her magna cum laude nursing degree in the U.S., she served passionately for 37 years in healthcare. Her life's journey rooted in faith, resilience, and purpose inspires her writing.",
//     shortBio: "",
//     image: "",
//     galleryImages: [],
//   }

//   const toggleMenu = () => setIsOpen(!isOpen)

//   const toggleBooks = () => {
//     if (isBooksOpen) {
//       setIsBooksOpen(false)
//       if (closeTimer.current) clearTimeout(closeTimer.current)
//     } else {
//       setIsBooksOpen(true)
//       if (closeTimer.current) clearTimeout(closeTimer.current)
//       closeTimer.current = setTimeout(() => setIsBooksOpen(false), 1 * 60 * 1000)
//     }
//   }

//   useEffect(() => {
//     return () => {
//       if (closeTimer.current) clearTimeout(closeTimer.current)
//     }
//   }, [])

//   return (
//     <footer className="text-gray-600 body-font bg-black py-10 md:py-16">
//       <div className="container px-5 md:px-14 lg:px-20 mx-auto flex flex-col items-center">
//         {/* Logo + Heading */}
//         <Link href="/" className="flex items-center space-x-3 mb-6">
//           <Image src="/assets/logo/Author logo (webp).webp" alt="Logo" width={45} height={45} className="w-11 h-11" />
//           <h1 className="text-xl md:text-2xl font-semibold text-myred font-custom">MARY PAT UZOMA</h1>
//         </Link>
//         {/* Mobile Menu Button */}
//         <div className="md:hidden mb-4">
//           <button onClick={toggleMenu} aria-label="Toggle menu">
//             {isOpen ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
//           </button>
//         </div>
//         {/* Navigation */}
//         <nav
//           className={`${
//             isOpen ? "flex" : "hidden"
//           } flex-col md:flex md:flex-row md:justify-center md:space-x-8 text-white font-medium text-lg space-y-4 md:space-y-0 items-center w-full md:w-auto`}
//         >
//           {/* BOOKS Dropdown */}
//           <div
//             className="relative flex flex-col items-center w-full md:w-auto"
//             onMouseEnter={toggleBooks}
//             onClick={toggleBooks}
//           >
//             <button className="flex items-center text-myred hover:text-onhover">
//               BOOKS <FaChevronDown className="ml-1" />
//             </button>
//             {isBooksOpen && (
//               <div className="mt-4 bg-white rounded-lg shadow-xl px-4 py-3 w-full md:w-auto flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-sm md:text-base text-black font-semibold z-20">
//                 {displayBooks.map((book) => (
//                   <Link
//                     key={book.id}
//                     href={`/allbooks/${book.slug}`}
//                     className="hover:bg-myred hover:text-white px-3 py-2 rounded w-full text-center md:w-auto"
//                   >
//                     {book.title}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//           <Link href="/author" className="hover:text-myred w-full text-center md:w-auto">
//             AUTHOR
//           </Link>
//           <Link href="/blog" className="hover:text-myred w-full text-center md:w-auto">
//             BLOG
//           </Link>
//           <Link href="/contactus" className="hover:text-myred w-full text-center md:w-auto">
//             CONTACT US
//           </Link>
//         </nav>
//         {/* Horizontal line under navigation */}
//         <div className="w-full mt-6 md:mt-8">
//           <div className="border-b-2 border-myred px-4 md:px-8 lg:px-20" />
//         </div>
//         {/* Author Bio Section */}
//         <div className="w-full mt-8 text-white text-center px-4 md:px-8 lg:px-20">
//           <h2 className="text-xl md:text-2xl font-semibold text-myred mb-4">{displayProfile.name}</h2>
//           <p className="text-base md:text-lg font-medium mb-4">{displayProfile.title}</p>
//           <p className="text-sm md:text-base leading-relaxed">{displayProfile.bio}</p>
//           <p className="text-sm md:text-base leading-relaxed mt-4">
//           Originally from Igbo land in Eastern Nigeria. After earning her magna cum laude nursing degree in the U.S., she served passionately for 37 years in healthcare. Her life’s journey rooted in faith, resilience, and purpose inspires her writing. She has authored several books, including one that shares her powerful testimony of God’s grace through trials and triumphs.
//           </p>
//           <p className="text-sm md:text-base leading-relaxed mt-4">
//             With every page you flip, Marypee's mission remains clear: to share stories that honor God and encourage
//             others to trust His plan.
//           </p>
//         </div>
//         {/* Horizontal line under bio */}
//         <div className="w-full mt-8">
//           <div className="border-b-2 border-white px-4 md:px-8 lg:px-20" />
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer







// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { FaChevronDown } from "react-icons/fa6";

// const Footer = () => {
//   const [isOpen, setIsOpen] = useState(false); // Hamburger nav
//   const [isBooksOpen, setIsBooksOpen] = useState(false); // Books dropdown
//   const closeTimer = useRef<NodeJS.Timeout | null>(null);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const toggleBooks = () => {
//     if (isBooksOpen) {
//       setIsBooksOpen(false);
//       if (closeTimer.current) clearTimeout(closeTimer.current);
//     } else {
//       setIsBooksOpen(true);
//       if (closeTimer.current) clearTimeout(closeTimer.current);
//       closeTimer.current = setTimeout(() => setIsBooksOpen(false), 1 * 60 * 1000);
//     }
//   };

//   useEffect(() => {
//     return () => {
//       if (closeTimer.current) clearTimeout(closeTimer.current);
//     };
//   }, []);

//   return (
//     <footer className="text-gray-600 body-font bg-black py-10 md:py-16">
//       <div className="container px-5 md:px-14 lg:px-20 mx-auto flex flex-col items-center">
//         {/* Logo + Heading */}
//         <a href="/" className="flex items-center space-x-3 mb-6">
//           <Image
//             src="/assets/logo/Author logo (webp).webp"
//             alt="Logo"
//             width={45}
//             height={45}
//             className="w-11 h-11"
//           />
//           <h1 className="text-xl md:text-2xl font-semibold text-myred font-custom">
//             MARY PAT UZOMA
//           </h1>
//         </a>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden mb-4">
//           <button onClick={toggleMenu} aria-label="Toggle menu">
//             {isOpen ? (
//               <FaTimes size={24} className="text-white" />
//             ) : (
//               <FaBars size={24} className="text-white" />
//             )}
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav
//           className={`${
//             isOpen ? "flex" : "hidden"
//           } flex-col md:flex md:flex-row md:justify-center md:space-x-8 text-white font-medium text-lg space-y-4 md:space-y-0 items-center w-full md:w-auto`}
//         >
//           {/* BOOKS Dropdown */}
//           <div
//             className="relative flex flex-col items-center w-full md:w-auto"
//             onMouseEnter={toggleBooks}
//             onClick={toggleBooks}
//           >
//             <button className="flex items-center text-myred hover:text-onhover">
//               BOOKS <FaChevronDown className="ml-1" />
//             </button>

//             {isBooksOpen && (
//               <div className="mt-4 bg-white rounded-lg shadow-xl px-4 py-3 w-full md:w-auto flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-sm md:text-base text-black font-semibold z-20">
//                 <a
//                   href="/allbooks/book1"
//                   className="hover:bg-myred hover:text-white px-3 py-2 rounded w-full text-center md:w-auto"
//                 >
//                   Misplaced Trust & Power
//                 </a>
//                 <a
//                   href="/allbooks/book2"
//                   className="hover:bg-myred hover:text-white px-3 py-2 rounded w-full text-center md:w-auto"
//                 >
//                   From The Eyes Of A Baby
//                 </a>
//                 <a
//                   href="/allbooks/book3"
//                   className="hover:bg-myred hover:text-white px-3 py-2 rounded w-full text-center md:w-auto"
//                 >
//                   Wisdom From A Woman
//                 </a>
//                 <a
//                   href="/allbooks/book4"
//                   className="hover:bg-myred hover:text-white px-3 py-2 rounded w-full text-center md:w-auto"
//                 >
//                   Building A Functional Home
//                 </a>
//               </div>
//             )}
//           </div>

//           <a href="/author" className="hover:text-myred w-full text-center md:w-auto">
//             AUTHOR
//           </a>
//           <a href="/blog" className="hover:text-myred w-full text-center md:w-auto">
//             BLOG
//           </a>
//           <a href="/contactus" className="hover:text-myred w-full text-center md:w-auto">
//             CONTACT US
//           </a>
//         </nav>

//         {/* Horizontal line under navigation */}
//         <div className="w-full mt-6 md:mt-8">
//           <div className="border-b-2 border-myred px-4 md:px-8 lg:px-20" />
//         </div>

//         {/* Author Bio Section */}
//         <div className="w-full mt-8 text-white text-center px-4 md:px-8 lg:px-20">
//           <h2 className="text-xl md:text-2xl font-semibold text-myred mb-4">
//             MARY PEE (MARY PAT UZOMA NÉE MBAMAH)
//           </h2>
//           <p className="text-base md:text-lg font-medium mb-4">
//             NURSE. EDUCATOR. REAL ESTATE INVESTOR. WOMAN OF FAITH.
//           </p>
//           <p className="text-sm md:text-base leading-relaxed">
//             Originally from Igbo land in Eastern Nigeria. After earning her magna cum laude nursing degree in the U.S., she served passionately for 37 years in healthcare. Her life’s journey rooted in faith, resilience, and purpose inspires her writing. She has authored several books, including one that shares her powerful testimony of God’s grace through trials and triumphs.
//           </p>
//           <p className="text-sm md:text-base leading-relaxed mt-4">
//             With every page you flip, Marypee’s mission remains clear: to share stories that honor God and encourage others to trust His plan.
//           </p>
//         </div>

//         {/* Horizontal line under bio */}
//         <div className="w-full mt-8">
//           <div className="border-b-2 border-white px-4 md:px-8 lg:px-20" />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;