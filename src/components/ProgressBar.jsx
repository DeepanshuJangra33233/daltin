import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

const ProgressBar = ({ imageElement }) => {
  // const imageRef = useRef(null);

  // useEffect(() => {
  //   const element = imageRef.current;
  //   gsap.to(element, {
  //     x: "-100px", // Move the image to the left
  //     duration: 5,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: element,
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: true,
  //       markers: true,
  //     },
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((instance) => instance.kill());
  //   };
  // }, []);
  return (
    <div className="fixed bottom-[10%] left-0 w-full h-[70px]">
      <div className="flex items-center w-[300%]" ref={imageElement}>
        <Image
          className="w-full h-full"
          src="/assets/images/timeline.png"
          alt="timeline"
          width={2000}
          height={76}
        />
        <Image
          className="w-full h-full"
          src="/assets/images/timeline.png"
          alt="timeline"
          width={2000}
          height={76}
        />
        <Image
          className="w-full h-full"
          src="/assets/images/timeline.png"
          alt="timeline"
          width={2000}
          height={76}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
