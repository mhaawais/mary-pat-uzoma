import type { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";

export const metadata: Metadata = {
  title: "Contact - Marry Pat Uzoma",
  description: "Contact Mary Pat Mbamah Uzoma - Reach out for book inquiries, speaking engagements, or collaborations.",
};

export default function ContactUs() {
  return <ContactUsClient />;
}