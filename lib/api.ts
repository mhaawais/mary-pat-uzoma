import { env } from "./env";

const API_KEY = env.ADMIN_API_KEY;
const API_BASE_URL = env.ADMIN_API_URL;

// Types for Book, Blog, Profile, and ContactFormData
export interface Book {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export interface Blog {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  content: string;
  image: string;
  slug: string;
}

export interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  galleryImages: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Utility to generate a unique slug
function generateSlug(title: string, id: string, existingSlugs: Set<string>): string {
  let slug = title
    ? title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
    : `item-${id}`;
  
  // Ensure uniqueness by appending a counter if needed
  let uniqueSlug = slug;
  let counter = 1;
  while (existingSlugs.has(uniqueSlug)) {
    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }
  existingSlugs.add(uniqueSlug);
  return uniqueSlug;
}

// Fetch books from the admin panel
export async function fetchBooks(): Promise<Book[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/sync?type=books&apiKey=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch books: ${response.status}`);
    }

    const books = await response.json();
    const existingSlugs = new Set<string>();

    // Ensure all books have valid slugs
    const validBooks = books.map((book: Book) => {
      if (!book.slug) {
        console.warn(`Book ${book.id} (${book.title}) is missing a slug, generating one`);
        book.slug = generateSlug(book.title, book.id, existingSlugs);
      } else {
        existingSlugs.add(book.slug);
      }
      return book;
    });

    return validBooks;
  } catch (error) {
    console.error("Error fetching books:", error);
    // Return fallback data if API fails
    return [
      {
        id: "1",
        title: "Misplaced Trust & Power",
        description: "The story of heartbreak, betrayal, and forgiveness that shook the heavens.",
        image: "/assets/images/marry4.webp",
        slug: "misplaced-trust-and-power",
      },
      {
        id: "2",
        title: "From The Eyes Of A Baby",
        description: "Seeing the world through newborn eyes.",
        image: "/assets/images/from2.jpg",
        slug: "from-the-eyes-of-a-baby",
      },
      {
        id: "3",
        title: "Wisdom From A Woman",
        description: "Insights from a spiritual journey.",
        image: "/assets/images/wisdom3.jpg",
        slug: "wisdom-from-a-woman",
      },
      {
        id: "4",
        title: "Building A Functional Home",
        description: "Practical advice for a harmonious home life.",
        image: "/assets/images/building1.jpg",
        slug: "building-a-functional-home",
      },
    ];
  }
}

// Fetch blogs from the admin panel
export async function fetchBlogs(): Promise<Blog[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/sync?type=blogs&apiKey=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status}`);
    }

    const blogs = await response.json();
    const existingSlugs = new Set<string>();

    // Ensure all blogs have valid slugs
    const validBlogs = blogs.map((blog: Blog) => {
      if (!blog.slug) {
        console.warn(`Blog ${blog.id} (${blog.title}) is missing a slug, generating one`);
        blog.slug = generateSlug(blog.title, blog.id, existingSlugs);
      } else {
        existingSlugs.add(blog.slug);
      }
      return blog; // Fixed: Replaced 'mergedBlog' with 'blog'
    });

    return validBlogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    // Return fallback data if API fails
    return [
      {
        id: "1",
        title: "MISPLACED TRUST AND THE POWER OF FORGIVENESS",
        subtitle: "One measure of Kindness, One Stranger, One Decision That Swap Everything",
        summary: "...",
        content: "...",
        image: "/assets/images/1.jpg",
        slug: "misplaced-trust-and-the-power-of-forgiveness",
      },
      {
        id: "2",
        title: "FROM THE EYES OF A BABY",
        subtitle: "Seeing the World Through Newborn Eyes: A Book That Changes Everything",
        summary: "...",
        content: "...",
        image: "/assets/images/2.jpg",
        slug: "from-the-eyes-of-a-baby",
      },
    ];
  }
}

// Fetch a single book by slug
export async function fetchBookBySlug(slug: string): Promise<Book | null> {
  try {
    const books = await fetchBooks();
    const book = books.find((book) => book.slug === slug);

    if (!book) {
      return null;
    }

    return book;
  } catch (error) {
    console.error("Error fetching book by slug:", error);
    return null;
  }
}

// Fetch a single blog by slug
export async function fetchBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const blogs = await fetchBlogs();
    const blog = blogs.find((blog) => blog.slug === slug);

    if (!blog) {
      return null;
    }

    return blog;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
}

// Fetch profile data from the admin panel
export async function fetchProfile(): Promise<Profile | null> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/sync?type=profile&apiKey=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch profile: ${response.status}`);
    }

    const profile = await response.json();
    return profile;
  } catch (error) {
    console.error("Error fetching profile:", error);
    // Return fallback data if API fails
    return {
      id: "1",
      name: "Mary Pat Uzoma",
      title: "Author & Speaker",
      bio: "Mary Pat Uzoma is an accomplished author and inspirational speaker...",
      image: "/assets/images/profile.jpg",
      galleryImages: [
        "/assets/images/gallery1.jpg",
        "/assets/images/gallery2.jpg",
        "/assets/images/gallery3.jpg",
      ],
    };
  }
}

// Submit contact form data to the admin panel
export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to submit contact form: ${response.status}`);
    }

    const result = await response.json();
    return {
      success: true,
      message: result.message || "Form submitted successfully!",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to submit form",
    };
  }
}
