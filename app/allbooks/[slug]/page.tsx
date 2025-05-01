import React from 'react'; // Add this import
import { fetchBookBySlug, fetchBooks } from "../../../lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import type { Metadata } from "next";
import Link from 'next/link';
import { FaChevronRight } from "react-icons/fa";


interface BookPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const books = await fetchBooks();
  return books.map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const book = await fetchBookBySlug(params.slug);
  if (!book) {
    return {
      title: "Book Not Found",
      description: "The requested book could not be found.",
    };
  }
  return {
    title: book.title,
    description: book.description,
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const [book, books] = await Promise.all([
    fetchBookBySlug(params.slug),
    fetchBooks(),
  ]);

  if (!book) {
    notFound();
  }

  return (
    <section>
      <Header books={books} />

      {/* Hero Section */}
      <div className="relative w-full bg-black py-16 md:py-20 lg:py-24">
        <div className="container mx-auto flex flex-col justify-center items-center px-4">
          <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white border-t-2 border-b-2 border-myred py-4 mb-8">
            BOOKS
          </h2>
          <div className="flex items-center gap-3">
            <Link href="/">
              <p className="text-lg md:text-xl font-bold text-white hover:text-myred underline transition">
                HOME
              </p>
            </Link>
            <FaChevronRight className="text-myred text-lg md:text-xl" />
            <p className="text-lg md:text-xl font-bold text-white">BOOKS</p>
          </div>
        </div>
      </div>


      <div className="bg-black text-white container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">{book.title}</h1>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="md:w-1/3">
            <Image
              src={book.image}
              alt={book.title}
              width={300}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg">{book.description}</p>
          </div>
        </div>
      </div>
      <Footer books={books} profile={null} />
    </section>
  );
}


