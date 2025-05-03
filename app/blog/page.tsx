// app/blog/page.tsx
import Blog from "@/components/blog";
import { fetchBlogs } from "@/lib/api";

export const dynamic = "force-dynamic"; // Ensures server-side rendering every time

export default async function BlogPage() {
  const blogs = await fetchBlogs();

  if (!blogs.length) {
    console.warn("⚠️ No blogs returned from fetchBlogs()");
  }

  return <Blog blogs={blogs} />;
}
