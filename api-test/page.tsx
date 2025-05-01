"use client";

import React from "react";
import { useState, useEffect } from "react";
import { fetchBooks, fetchBlogs, fetchProfile } from "../lib/api";
import { ApiTestServer } from "./server";

export default function ApiTestPage({ initialData }: { initialData: Awaited<ReturnType<typeof ApiTestServer>> }) {
  const [status, setStatus] = useState<{
    books: { loading: boolean; success: boolean; error: string | null; count: number };
    blogs: { loading: boolean; success: boolean; error: string | null; count: number };
    profile: { loading: boolean; success: boolean; error: string | null; exists: boolean };
  }>({
    books: { loading: false, success: true, error: null, count: initialData.books.length },
    blogs: { loading: false, success: true, error: null, count: initialData.blogs.length },
    profile: { loading: false, success: true, error: null, exists: Boolean(initialData.profile) },
  });

  // Optionally re-fetch client-side if needed
  useEffect(() => {
    async function testConnections() {
      try {
        setStatus((prev) => ({ ...prev, books: { ...prev.books, loading: true } }));
        const books = await fetchBooks();
        setStatus((prev) => ({
          ...prev,
          books: { loading: false, success: true, error: null, count: books?.length || 0 },
        }));
      } catch (error) {
        setStatus((prev) => ({
          ...prev,
          books: {
            loading: false,
            success: false,
            error: error instanceof Error ? error.message : "Unknown error",
            count: 0,
          },
        }));
      }
      // Similar for blogs and profile
    }
    testConnections();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">API Connection Test</h1>
        {/* Render status as before */}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const initialData = await ApiTestServer();
  return { props: { initialData } };
}