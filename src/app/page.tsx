import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { SkipLink } from "@/components/SkipLink";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="konten">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
