import React from "react";
import { fetchBlogBySlug, fetchBooks } from "../../../lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import type { Metadata } from "next";

interface BlogPageProps {
  params: { slug: string };
}

// ✅ Always render fresh content on request
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = await fetchBlogBySlug(params.slug);
  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog could not be found.",
    };
  }
  return {
    title: blog.title,
    description: blog.summary,
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const [blog, books] = await Promise.all([
    fetchBlogBySlug(params.slug),
    fetchBooks(),
  ]);

  if (!blog) {
    notFound();
  }

  return (
    <section>
      <Header books={books} />

      <div className="bg-black text-white container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <h2 className="text-2xl mt-4">{blog.subtitle}</h2>
        <Image
          src={blog.image}
          alt={blog.title}
          width={600}
          height={400}
          className="mt-8 rounded-lg"
        />
        <p className="mt-8 whitespace-pre-line leading-relaxed">{blog.content}</p>
      </div>

      <Footer books={books} profile={null} />
    </section>
  );
}
