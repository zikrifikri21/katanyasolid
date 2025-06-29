import Image from "next/image";
import React from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

export default function ParallaxSection() {
  const palmImg = () => <Image src={"/assets/img/palm.png"} alt="Palm" width={200} height={200} />;
  const fmipaImg = () => <Image src="/assets/img/fmipa.png" alt="FMIPA" fill className="object-fit" priority />;
  const cloud1Img = () => <Image src="/assets/img/cloud1.png" alt="cloud" width={300} height={300} priority />;
  const cloud2Img = () => <Image src="/assets/img/cloud2.png" alt="cloud" width={500} height={500} priority />;

  return (
    <ParallaxProvider>
      <ParallaxBanner
        style={{
          borderTopLeftRadius: "2rem",
          borderTopRightRadius: "2rem",
        }}
        layers={[
          {
            speed: -15,
            children: (
              <div className="absolute inset-0 -top-52 flex items-center justify-center">
                <h1 className="text-6xl sm:text-[400px] text-shadow-lg text-white font-poppins font-extrabold">FMIPA</h1>
              </div>
            ),
          },
          {
            speed: -10,
            children: <div className="absolute inset-0 left-50 top-30">{cloud1Img()}</div>,
            expanded: false,
            scale: [2, 1.2],
          },
          {
            speed: -35,
            children: <div className="absolute top-1/4 right-20">{cloud2Img()}</div>,
            expanded: false,
            scale: [2, 1.2],
          },
          {
            speed: -25,
            children: <div className="absolute inset-0 top-42 flex items-center">{cloud2Img()}</div>,
          },
          {
            children: <div className="absolute -bottom-50 w-screen h-full">{fmipaImg()}</div>,
            expanded: false,
            speed: 20,
          },
          {
            children: <div className="absolute -left-20 sm:left-10 -bottom-10">{palmImg()}</div>,
            expanded: false,
            speed: -10,
            scale: [1, 1.2],
            opacity: [0.9, 1],
          },
        ]}
        className="aspect-video"
      />
    </ParallaxProvider>
  );
}
