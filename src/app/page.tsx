import AboutCollege from "@/components/AboutCollege/AboutCollege";
import Blog from "@/components/Blog/Blog";
import Curriculum from "@/components/Download-Our-Curriculum/curriculum";
import FAQ from "@/components/FAQ/FAQ";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NavBar from "@/components/Navbar/Navbar";
import News from "@/components/NewsLetter/News";
import ScolarProgram_AID from "@/components/ScolarProgram/ScolarProgram_AID";
import Events from "@/components/UpComingEvents/Events";
import BacktoTop from "../components/Download-Our-Curriculum/BacktoTop";
import TestimoinaYoutube_fram_Swipper from "../components/Testimoinal-Youtube_fram_Swipper/Testimoinal-Youtube_fram_Swipper";
import Courses_Programs from "@/components/Courses/Courses_Programs";
import Head from "next/head";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://www.bilalhaider.tech/",
    name: "Quaid College",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.yourwebsite.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Head>
        <title>Quaid College</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <Curriculum />
      <BacktoTop />
      <NavBar />
      <div className="w-full h-full">
        {/* Header Section / Hero Section */}
        <div className="min-h-screen">
          <Header />
        </div>
        {/* About College Section */}
        <div className="py-14 bg-[#EDF7FF]">
          <AboutCollege />
        </div>
        {/* Courses / Our Programs  Section */}
        <div className="py-14">
          <Courses_Programs />
        </div>
        {/* Features of our Collage and our Courses */}
        <Features />
        {/* test */}
        <TestimoinaYoutube_fram_Swipper />
        {/* Upcoming Events */}
        {/* <Events /> */}
        {/* Scolar Program */}
        <ScolarProgram_AID />
        {/* FAQS */}
        <FAQ />
        {/* Blogs */}
        {/* <Blog /> */}
        {/* NewsLetter For latest news */}
        <News />
        <Footer />
      </div>
    </>
  );
}
