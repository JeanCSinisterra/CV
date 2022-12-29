import React from "react";
import { Helmet } from 'react-helmet';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Helmet>
        <title>Full Stack Web Developer | Jean C. Sinisterra </title>
        <meta
          name="Full Stack Web Developer | Jean C. Sinisterra"
          content="From custom website design to full-stack web development, I offer a range of services to help businesses and individuals achieve their online goals. Whether you need a simple brochure website or a complex web application, I have the skills and experience to deliver results."
        />
        <meta
          name="keywords"
          content="web development Panama  web developer Panama  web application development Panama custom website development Panama custom website development Panama " />
        <meta
          name="author"
          content="Jean Carlo Sinisterra" />
      </Helmet>
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer/>
    </main>
  );
}
