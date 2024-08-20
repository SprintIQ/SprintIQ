import Image from "next/image";

const OvalAnimation = () => {

  return (
    <div className="relative w-full h-full">
      <Image
        src="/oval-shape.gif"
        alt="Spining Image"
        width={1000}
        height={950}
        className="
          w-full h-auto
          transform -rotate-90
          filter grayscale brightness-150
          md:scale-125
        "
      />
    </div>
  );
};

export default OvalAnimation;