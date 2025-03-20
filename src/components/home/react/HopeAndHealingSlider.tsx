import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState, type JSX } from "react";
import ProgramOneImage from "@/assets/images/program-one.webp";
import ProgramTwoImage from "@/assets/images/program-two.webp";
import ProgramThreeImage from "@/assets/images/program-three.webp";
import Popup from "@/components/modal/ProgramPopup";
import { Image } from "astro:assets";
interface program {
  image: JSX.Element;
  text: string;
  description: string;
}

const HopeAndHealingSlider = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<program | null>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    setIsMounted(true);
  }, [window]);

  if (!isMounted) return null;

  const programs: program[] = [
    {
      image: (
        <img
          src={ProgramOneImage.src}
          alt="program-one"
          className="w-full mt-[18px]"
        />
      ),
      text: "Inpatient Detox",
      description:
        "Achieve lasting recovery while balancing your work, family, and other commitments. Our outpatient programs provide the support and guidance you need to navigate the challenges of addiction and build a fulfilling life.",
    },
    {
      image: (
        <img
          src={ProgramTwoImage.src}
          alt="program-two"
          className="w-full mt-[18px]"
        />
      ),
      text: "Alcohol Rehab",
      description:
        "Achieve lasting recovery while balancing your work, family, and other commitments. Our outpatient programs provide the support and guidance you need to navigate the challenges of addiction and build a fulfilling life.",
    },
    {
      image: (
        <img
          src={ProgramThreeImage.src}
          alt="program-three"
          className="w-full mt-[18px]"
        />
      ),
      text: "Alumni Program",
      description:
        "Achieve lasting recovery while balancing your work, family, and other commitments. Our outpatient programs provide the support and guidance you need to navigate the challenges of addiction and build a fulfilling life.",
    },
    {
      image: (
        <img
          src={ProgramOneImage.src}
          alt="program-one"
          className="w-full mt-[18px]"
        />
      ),
      text: "Inpatient Detox",
      description:
        "Achieve lasting recovery while balancing your work, family, and other commitments. Our outpatient programs provide the support and guidance you need to navigate the challenges of addiction and build a fulfilling life.",
    },
    {
      image: (
        <img
          src={ProgramTwoImage.src}
          alt="program-two"
          className="w-full mt-[18px]"
        />
      ),
      text: "Alcohol Rehab",
      description:
        "Achieve lasting recovery while balancing your work, family, and other commitments. Our outpatient programs provide the support and guidance you need to navigate the challenges of addiction and build a fulfilling life.",
    },
    {
      image: (
        <img
          src={ProgramThreeImage.src}
          alt="program-three"
          className="w-full mt-[18px]"
        />
      ),
      text: "Alumni Program",
      description:
        "Achieve lasting recovery while balancing your work, family, and other commitments. Our outpatient programs provide the support and guidance you need to navigate the challenges of addiction and build a fulfilling life.",
    },
  ];

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProgram(null);
  };

  const handleImageClick = (program: program) => {
    setSelectedProgram(program);
    setIsPopupOpen(true);
  };
  return (
    <>
      {" "}
      <section className="px-4 md:px-0">
        <h2 className="text-center text-4xl md:text-5xl text-[#1F1168] mt-10 md:mt-[89px] font-normal font-Frank">
          Find Hope and Healing
        </h2>
        <p className="text-center text-base md:text-[22px] font-normal mt-2 md:mt-5 text-text">
          Discover Our Comprehensive Rehab Programs
        </p>
        <div className="w-full max-w-[200px] h-[1px] orb-gradient-line mx-auto"></div>
      </section>
      <div className="overflow-auto flex gap-[14px] mt-8 md:mt-[53px]"></div>
      <div className="pb-16 overflow-hidden">
        <Slider {...settings}>
          {programs.map((program) => (
            <div
              onClick={() => handleImageClick(program)}
              className="w-[424px] pt-5 pl-4 pb-4 bg-[#FDF7F3] cursor-pointer hover:bg-[#D98918] group transition-colors"
            >
              <p className="text-[#170F49] group-hover:text-white transition-colors font-semibold text-[22px]">
                {program.text}
              </p>
              {program.image}

              <div className="mt-5 pr-5">
                <div className="uppercase text-[#170F49] group-hover:text-white transition-colors font-medium gap-2 items-center justify-between">
                  <div className="flex justify-between items-center">
                    <span>Read more</span>

                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.412272 1.17924C0.57988 0.97985 0.819832 0.855205 1.07934 0.83273C1.33885 0.810254 1.59666 0.891788 1.79606 1.0594L12.4598 10.0232L11.6285 2.55C11.6108 2.41976 11.6195 2.28729 11.6539 2.16044C11.6883 2.03359 11.7479 1.91494 11.829 1.81152C11.9101 1.70811 12.0112 1.62203 12.1262 1.55839C12.2412 1.49475 12.3678 1.45484 12.4985 1.44103C12.6293 1.42722 12.7614 1.43979 12.8872 1.47799C13.0129 1.5162 13.1298 1.57925 13.2307 1.66343C13.3317 1.74761 13.4147 1.85119 13.4749 1.96805C13.5351 2.0849 13.5712 2.21265 13.5811 2.34372L14.6706 12.2409C14.6844 12.3722 14.6716 12.5049 14.633 12.6311C14.5943 12.7574 14.5306 12.8745 14.4457 12.9756C14.3607 13.0766 14.2563 13.1595 14.1386 13.2193C14.0209 13.2791 13.8923 13.3145 13.7606 13.3235L3.82351 13.9518C3.69269 13.9645 3.56063 13.9509 3.43517 13.9117C3.30971 13.8725 3.19339 13.8085 3.09311 13.7236C2.99283 13.6386 2.91063 13.5344 2.85137 13.417C2.79211 13.2997 2.75701 13.1717 2.74814 13.0405C2.73927 12.9094 2.75682 12.7778 2.79974 12.6536C2.84266 12.5293 2.91008 12.415 2.998 12.3173C3.08593 12.2196 3.19257 12.1405 3.31162 12.0848C3.43066 12.029 3.55967 11.9978 3.69102 11.9928L11.1959 11.5269L0.53212 2.56303C0.332727 2.39542 0.208082 2.15547 0.185606 1.89596C0.16313 1.63645 0.244664 1.37864 0.412272 1.17924Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        program={selectedProgram}
      />
    </>
  );
};

export default HopeAndHealingSlider;
