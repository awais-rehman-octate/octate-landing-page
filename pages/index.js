import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/Hero";
import GetStarted from "@/components/GetStarted";
import Insights from "@/components/Insights";
import UnlockYourBusiness from "@/components/UnlockYourBusiness";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Partner from "@/components/Partner";
import LetsWorkTogether from "@/components/LetsWorkTogether";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Insights />
      <GetStarted />
      <UnlockYourBusiness />
      <Services />
      <Testimonials />
      <Partner />
      <LetsWorkTogether />
    </div>
  );
}
