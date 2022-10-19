import Head from "next/head";
import Academy from "../components/Academy";
import EventNames from "../components/EventNames";
import Event from "../components/Event";
import Hero from "../components/Hero";
import Work from "../components/Work";
// import Footer from "../components/Footer";
import { createContext, useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  // const [navStyle, setNavStyle] = useState(false);

  // const [scrolling, setScrolling] = useState(false);
  // const NavColor = createContext;
  // const [scrollTop, setScrollTop] = useState(0);

  // useEffect(() => {
  //   function onScroll() {
  //     let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
  //     if (currentPosition > 20) {
  //       // downscroll code
  //       setScrolling(false);
  //     } else {
  //       // upscroll code
  //       setScrolling(true);
  //     }
  //     setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
  //     console.log(scrolling);
  //   }

  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [scrollTop]);

  return (
    <div>
      <Head>
        <title>DJKINGHER</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      <main>
        {/* <NavColor.Provider value={scrolling}> */}
        <Navbar />
        <Hero />
        <EventNames />

        <Academy />
        <Work />
        <Event />
        {/* <Footer /> */}
        {/* </NavColor.Provider>*/}
      </main>
    </div>
  );
}