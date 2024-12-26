import Footer from "@/components/Footer";
import GoToTopButton from "@/components/GoToTopButton";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(
    <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    <GoToTopButton />
    </>
  )
}
