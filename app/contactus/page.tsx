import type { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";

export const metadata: Metadata = {
  title: "Contact - Marry Pat Uzoma",
  description: "Get in touch with us",
};

export default function ContactUs() {
  return <ContactUsClient />;
}