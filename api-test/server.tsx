import { fetchBooks, fetchBlogs, fetchProfile } from "../lib/api";

export async function ApiTestServer() {
  const books = await fetchBooks();
  const blogs = await fetchBlogs();
  const profile = await fetchProfile();
  return { books, blogs, profile };
}