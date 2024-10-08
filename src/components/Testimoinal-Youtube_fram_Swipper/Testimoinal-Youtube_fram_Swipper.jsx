"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/Firebase/firebase";
import AOS from "aos";
import "aos/dist/aos.css";

function TestimoinalYoutube_fram_Swipper() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      easing: "ease-out-cubic",
    });
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [youtubeSRC, setYoutubeSRC] = useState([]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const getimages = async () => {
      // Fetching data logic
      const q = collection(firestore, "youtube_testimonials");
      const querySnapshot = await getDocs(q);
      const temp = [];
      querySnapshot.forEach((doc) => {
        temp.push({ id: doc.id, ...doc.data() });
      });
      setYoutubeSRC(temp);
      console.log(temp);
    };
    getimages();
  }, []);

  return (
    <>
      {youtubeSRC ? (
        <div className="w-full lg:max-w-6xl mx-auto py-14 flex flex-col justify-center items-center">
          <h1 className="md:text-[50px] font-semibold text-[20px] text-center md:text-start pb-10">
            What are student says
          </h1>
          <div className="flex w-full px-5 md:px-20 lg:px-44 items-center gap-x-2">
            <div>
              <button
                className="embla__prev p-1 md:p-2 lg:p-2 rounded-full bg-[#FF5D2B] "
                onClick={scrollPrev}
                name="prevBTN"
              >
                <GrFormPrevious
                  className="text-[20px] lg:text-[40px]"
                  color="white"
                />
              </button>
            </div>
            <div className="embla " ref={emblaRef}>
              <div className="embla__container">
                {youtubeSRC.map((item) => (
                  <div
                    className="embla__slide flex justify-center"
                    key={item.id}
                  >
                    <iframe
                      width="660"
                      height="370"
                      className="w-[350px] h-[180px] md:w-[450px] md:h-[270px]  lg:w-[660px] lg:h-[370px]"
                      src={item.youtubeSRC}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <button
                className="embla__next  p-1 md:p-2 lg:p-2 rounded-full bg-[#FF5D2B]"
                onClick={scrollNext}
                name="nextBTN"
              >
                <MdOutlineNavigateNext
                  className="text-[20px] lg:text-[40px]"
                  color="white"
                />
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default TestimoinalYoutube_fram_Swipper;
