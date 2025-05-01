import React from 'react'; // Add this import
import { Blog } from "../lib/api"; // Adjust path if needed
import Link from "next/link";
import Image from "next/image";

interface BlogPageProps {
  blogs: Blog[];
}

export default function BlogPage({ blogs }: BlogPageProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {blogs.map((blog) => (
          <Link href={`/detailblog/${blog.slug}`} key={blog.id}>
            <div className="border rounded-lg p-4">
              <Image
                src={blog.image}
                alt={blog.title}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-4">{blog.title}</h2>
              <p className="text-gray-600">{blog.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
