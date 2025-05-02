import React from "react";
import { Blog } from "../lib/api"; // Adjust path if necessary
import Link from "next/link";
import Image from "next/image";

interface BlogPageProps {
  blogs: Blog[];
}

export default function BlogPage({ blogs }: BlogPageProps) {
  return (
    <div className="container mx-auto px-4 py-16 bg-black text-white">
      <h1 className="text-4xl font-bold border-b-4 border-myred inline-block pb-2 mb-10">
        Blog
      </h1>

      {Array.isArray(blogs) && blogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link href={`/detailblog/${blog.slug}`} key={blog.id}>
              <div className="border border-gray-700 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer bg-white text-black">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-700">{blog.summary}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-lg text-center mt-8">No blog posts available at the moment.</p>
      )}
    </div>
  );
}
