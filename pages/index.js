import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/Hero";
import GetStarted from "@/components/GetStarted";
import Insights from "@/components/Insights";
import UnlockYourBusiness from "@/components/UnlockYourBusiness";
import Services from "@/components/Services";

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
    <div>
      <Hero />
      <Insights />
      <GetStarted />
      <UnlockYourBusiness />
      <Services />
    </div>
  );
}
