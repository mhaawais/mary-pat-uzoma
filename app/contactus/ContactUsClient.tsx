"use client";

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

const ContactUsClient = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://formspree.io/f/xyzevalb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <Header />
      {/* Top Section: Breadcrumb */}
      <section className="relative w-full bg-black py-16 md:py-20 lg:py-24">
        <div className="container mx-auto flex flex-col justify-center items-center px-4">
          <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white border-t-2 border-b-2 border-myred py-4 mb-8">
            CONTACT
          </h2>
          <div className="flex items-center gap-3">
            <Link href="/">
              <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200 underline cursor-pointer">
                HOME
              </p>
            </Link>
            <FaChevronRight className="text-myred text-lg md:text-xl" />
            <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200">
              CONTACT
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Section: Contact Form */}
      <section className="max-w-lg mx-auto px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">Contact</h1>
        <p className="text-base text-gray-500 text-center mb-8">
          Please use the form below to get in touch.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-xs font-semibold text-gray-700 uppercase mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="p-3 border border-gray-200 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-400 text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-xs font-semibold text-gray-700 uppercase mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email address"
              className="p-3 border border-gray-200 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-400 text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-xs font-semibold text-gray-700 uppercase mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message"
              rows={5}
              className="p-3 border border-gray-200 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-400 text-sm resize-y"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded text-sm font-medium hover:bg-gray-900 transition-colors"
          >
            Send message
          </button>
        </form>

        {status && (
          <p
            className={`mt-5 text-center text-sm ${
              status.includes('successfully') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {status}
          </p>
        )}

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Or email me at{' '}
            <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
              your.email@example.com
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUsClient;