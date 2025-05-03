// pages/blogs.tsx
import Blog from "@/components/blog";
import { fetchBlogs, type Blog as BlogType } from "@/lib/api";
import { GetServerSideProps } from "next";

interface BlogsPageProps {
  blogs: BlogType[];
}

export const getServerSideProps: GetServerSideProps<BlogsPageProps> = async () => {
  const blogs = await fetchBlogs();
  return { props: { blogs } };
};

export default function BlogsPage({ blogs }: BlogsPageProps) {
  return <Blog blogs={blogs} />;
}
