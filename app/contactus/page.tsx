import React from 'react'; // Add this import
import { fetchBooks } from "../../lib/api";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ContactUsClient from "./ContactUsClient";

export default async function ContactUsPage() {
  const books = await fetchBooks();

  return (
    <section>
      <ContactUsClient />
    </section>
  );
}
