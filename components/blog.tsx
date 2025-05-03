// app/blogs/page.tsx (or wherever you render your Blog page)
import { fetchBlogs } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic"; // Ensures SSR on every request (optional)

const BlogPage = async () => {
  const blogs = await fetchBlogs();

  return (
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
        {blogs?.length > 0 ? (
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
                  className="rounded-md object-cover"
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
          <p className="text-white text-lg text-center w-full">
            No blogs available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
