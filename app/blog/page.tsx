import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FaChevronRight } from "react-icons/fa";
import { fetchBlogs, fetchProfile } from "@/lib/api";

export default async function BlogPage() {
  const [blogs, profile] = await Promise.all([fetchBlogs(), fetchProfile()]);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative w-full bg-black py-16 md:py-20 lg:py-24">
        <div className="container mx-auto flex flex-col justify-center items-center px-4">
          <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white border-t-2 border-b-2 border-myred py-4 mb-8">
            BLOGS
          </h2>
          <div className="flex items-center gap-3">
            <Link href="/">
              <p className="text-lg md:text-xl font-bold text-white hover:text-myred underline transition">
                HOME
              </p>
            </Link>
            <FaChevronRight className="text-myred text-lg md:text-xl" />
            <p className="text-lg md:text-xl font-bold text-white">BLOGS</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="bg-black text-white text-4xl font-bold text-center my-4 py-10 border-b-4 border-myred pb-3 w-fit mx-auto">
            MY BLOGS
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-white max-w-xl mx-auto">
            Explore stories that inspire and provoke thought
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl w-full">
          {Array.isArray(blogs) && blogs.length > 0 ? (
            blogs.map((blog) => (
              <div
                key={blog.id}
                className="min-w-[300px] max-w-md w-full bg-white rounded-lg shadow-lg p-6 flex flex-col transform transition duration-300 hover:shadow-xl"
              >
                <h2 className="text-2xl font-bold text-white bg-gray-800 p-4 rounded-t-lg">
                  <Link href={`/detailblog/${blog.slug}`}>{blog.title}</Link>
                </h2>
                <div className="w-full h-auto mt-4">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={`${blog.title} Image`}
                    width={400}
                    height={200}
                    layout="responsive"
                    objectFit="scale-down"
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-myred mt-4">{blog.subtitle}</h3>
                <p className="text-gray-600 mt-2 flex-grow">{blog.summary}</p>
                <Link
                  href={`/detailblog/${blog.slug}`}
                  className="mt-4 inline-block bg-myred text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-300 text-center transform hover:scale-105"
                >
                  Read More →
                </Link>
              </div>
            ))
          ) : (
            <p className="text-white text-lg">No blogs available.</p>
          )}
        </div>
      </div>

      <Footer profile={profile} />
    </>
  );
}
