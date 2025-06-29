"use client";

import ModelCanvas from "./ModelCanvas";
import LetterGlitch from "./LetterGlitch";
import ScrambledText from "./ScrambledText";
import ProfileIlkomp from "./ProfileIlkomp";

export default function HeroPage() {
  return (
    <>
      {/* Section 1 */}
      <section id="home" className="h-screen bg-black relative">
        <LetterGlitch glitchColors={["#2b4539", "#61dca3", "#61b3dc"]} glitchSpeed={50} centerVignette={false} outerVignette={true} smooth={true} />
        <div className="absolute top-1/2 left-1/2 px-1 text-white transform -translate-x-1/2 -translate-y-1/2 z-10 w-full h-full flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 w-full max-w-4xl text-center">
            <span className="text-4xl md:text-6xl font-extrabold">Welcome</span>
            <span className="text-3xl md:text-5xl font-bold">To</span>
            <span className="text-4xl md:text-6xl font-extrabold group cursor-pointer relative" title="Genap24">
              <span className="group-hover:opacity-0 transition-opacity duration-300 inline-block">Ilkom24</span>
              <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-block w-full">Genap24</span>
            </span>
          </div>
        </div>
        <ModelCanvas />
      </section>
      <section id="about" className="h-[500px] bg-black relative">
        <div className="p-8 rounded-4xl bg-white">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 px-12 py-16">
            <div className="flex items-center justify-center">
              <ScrambledText radius={100} duration={1.2} speed={0.5} scrambleChars=".:">
                "Ilmu Komputer 24 itu bukan cuma angkatan—kita keluarga. Tempat ngoding bareng, ngopi sambil debug, dan tumbuh bareng jadi talenta digital masa depan. Serius pas butuh, ngelawak pas santai. Satu visi, satu semangat: ngulik
                teknologi dan kuasai jawa."
              </ScrambledText>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <ProfileIlkomp
                firstContent={<img src="ilkomp.jpeg" alt="default pixel transition content, a cat!" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111",
                    }}
                  >
                    <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff", textAlign: "center" }}>GENAP SOLID!</p>
                  </div>
                }
                gridSize={12}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              ></ProfileIlkomp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
