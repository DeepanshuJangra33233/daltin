"use client";
import About from "@/components/About";
import NavBar from "@/components/common/NavBar";
import Login from "@/components/Login";
import OurMission from "@/components/OurMission";
import OurPartners from "@/components/OurPartners";
import OurStory from "@/components/OurStory";
import OurUPS from "@/components/OurUPS";
import ProgressBar from "@/components/ProgressBar";
import Register from "@/components/Register";
import SplashScreen from "@/components/SplashScreen";
import StudentVerifyPortal from "@/components/StudentVerifyPortal";
import StudentWelcomePortal from "@/components/StudentWelcomePortal";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const bodyContainer = useRef(null);
  const imageRef = useRef(null);
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const storyRef = useRef(null);
  const upsRef = useRef(null);
  const partnersRef = useRef(null);

  useEffect(() => {
    const container = bodyContainer.current;
    const imageElement = imageRef.current;
    const aboutSection = aboutRef.current;
    const missionSection = missionRef.current;
    const storySection = storyRef.current;
    const upsSection = upsRef.current;
    const partnersSection = partnersRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "15% bottom",
        end: "bottom 80%",
        scrub: 3,
      },
    });

    // TIMELINE SCROLL ANIMATION TRIGGER
    gsap.to(imageElement, {
      x: "-1000px",
      duration: 5,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom 80%",
        scrub: 1,
      },
    });

    // ALL SECTIONS FACE ANIMATION
    tl.to(aboutSection, {
      opacity: 0,
      duration: 2,
    })
      .to(
        storySection,
        {
          opacity: 1,
          duration: 2,
        },
        "-=1"
      )
      .to(
        storySection,
        {
          opacity: 0,
          duration: 2,
        },
        "-=1"
      )
      .to(
        missionSection,
        {
          opacity: 1,
          duration: 2,
        },
        "-=1"
      )
      .to(
        missionSection,
        {
          opacity: 0,
          duration: 2,
        },
        "-=1"
      )
      .to(
        upsSection,
        {
          opacity: 1,
          duration: 2,
        },
        "-=1"
      )
      .to(
        upsSection,
        {
          opacity: 0,
          duration: 2,
        },
        "-=1"
      )
      .to(
        partnersSection,
        {
          opacity: 1,
          duration: 2,
        },
        "-=1"
      );

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <div className="overflow-x-hidden">
      <div
        className="bg-[url('/assets/images/about_page_bg.webp')] bg-cover bg-center min-h-[1000vh] pt-[73px]"
        ref={bodyContainer}
      >
        <NavBar />
        <About refElement={aboutRef} />
        <OurStory refElement={storyRef} />
        <OurMission refElement={missionRef} />
        <OurUPS refElement={upsRef} />
        <OurPartners refElement={partnersRef} />
        {/* <SplashScreen /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <StudentWelcomePortal /> */}
        {/* <StudentVerifyPortal /> */}
        <ProgressBar imageElement={imageRef} />
      </div>
    </div>
  );
}
