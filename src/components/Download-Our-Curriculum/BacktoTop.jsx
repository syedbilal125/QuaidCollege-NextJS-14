"use client";
import { MdArrowUpward } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";


export default function BacktoTop() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showNavbar ? (
        <div className="fixed bottom-0 right-0 m-20 z-30 hidden lg:block">
          <div className="group relative flex justify-center items-center text-white text-sm font-bold">
            <div className="shadow-md flex items-center group-hover:gap-2 rounded-full cursor-pointer duration-300">
              <ScrollLink to="home" smooth={true} duration={5000}>
                <button class="btne">
                  <MdArrowUpward size={24} />
                </button>
              </ScrollLink>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
