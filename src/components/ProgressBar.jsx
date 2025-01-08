import Image from "next/image";

const ProgressBar = ({ imageElement }) => {
  return (
    <div className="fixed bottom-[2%] left-0 w-full h-[70px]">
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
