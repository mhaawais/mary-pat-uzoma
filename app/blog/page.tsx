// app/blog/page.tsx
import Blog from "@/components/blog";
import { fetchBlogs } from "@/lib/api";

export const dynamic = "force-dynamic"; // ⏱ ensures fresh data on every request (SSR)

export default async function BlogPage() {
  const blogs = await fetchBlogs();

  return <Blog blogs={blogs} />;
}
