"use client";

import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/lib/api";

interface FourProps {
  books: Book[];
}

const Four = ({ books }: FourProps) => {
  return (
    <section className="bg-black py-3 px-8">
      <div className="max-w-5xl mx-auto -mt-4 -mb-4">
        <h2 className="text-white text-4xl font-bold my-2 border-b-4 border-myred pb-3 w-fit mx-auto">
          BOOKS
        </h2>
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
  );
};

export default Four;
