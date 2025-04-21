import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-col items-center justify-center flex-grow text-white py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold tracking-tight text-myred mb-4">
            404
          </h1>
          <p className="text-2xl mb-6">Oops! The page you were looking for could not be found.</p>
          <div className="flex justify-center space-x-4">
            <Link href="page.tsx" className="bg-myred hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
              Go Back Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;