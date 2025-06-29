"use client";

import HeroSectionNew from "@/components/HeroSection";
import { ScrollVelocity } from "./../components/ScrollVelocity";
import Gallery from "@/components/Gallery";
import FlowingMenu from "@/components/Kegiatan";
import MemoriesSection from "@/components/MemoriesSection";
import ParallaxSection from "@/components/ParallaxSection";
import Image from "next/image";
const demoItems = [
  { link: "#", text: "Praktikum Fisika", image: "/assets/img/6.jpg" },
  { link: "#", text: "Praktikum Biologi", image: "/assets/img/7.jpg" },
  { link: "#", text: "Praktikum Kimia", image: "/assets/img/10.jpg" },
  { link: "#", text: "War is Over", image: "/assets/img/9.jpg" },
];
export default function Home() {
  return (
    <>
      <HeroSectionNew />
      <div className="my-4 bg-transparent">
        <ScrollVelocity texts={["Ilmu Komputer", "Genap Solid"]} velocity={50}></ScrollVelocity>
      </div>
      <section id="jmbot" className="h-[600px] relative">
        <Gallery bend={-3} textColor="#000" borderRadius={0.05} items={demoItems} font="bold 30px 'Poppins', sans-serif" />
      </section>
      <FlowingMenu items={demoItems} />
      <section className="relative sm:h-screen h-[600px]">
        <MemoriesSection />
      </section>
      <section>
        <div className="sm:m-12 m-4 rounded-t-4xl bg-blue-300 relative">
          <ParallaxSection />
          <Image src="/assets/img/shadow.png" alt="shadow" width={200} height={200} priority className="absolute sm:-bottom-1 w-screen h-32" />
        </div>
      </section>
      {/* Content Sections */}
      <section className="relative bg-white pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ilmu Komputer</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">Welcome to the world of Ilmu Komputer, where innovation meets technology to revolutionize the world of computer science.</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">Artificial Intelligence (AI)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">software engineering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">Cybersecurity</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-sky-100 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">A major challenge</h3>
                  <p className="text-gray-600">As the world becomes increasingly digital, the need for computer science to keep up with the rapid advancements in technology is undeniable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-blue-50 to-blue-100 py-20 px-4">
        <Image src="/assets/img/shadow.png" alt="shadow" width={200} height={200} priority className="absolute top-0 w-screen h-40 rotate-180" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Where Computer Science Meets Innovation</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Explore how we combine academic excellence with cutting-edge technology to shape the future of computer science.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                {/* AI Icon */}
                <AiBrain03Icon />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Artificial Intelligence</h3>
              <p className="text-gray-600">Leveraging AI to solve real-world problems, automate tasks, and drive innovation in various industries.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <SoftwareLicenseIcon />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Software Engineering</h3>
              <p className="text-gray-600">Building robust, scalable, and maintainable software systems that power modern applications and services.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <NetworkIcon />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cybersecurity</h3>
              <p className="text-gray-600">Protecting digital assets and ensuring privacy through advanced security practices and technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ilkom24</h3>
          <p className="text-gray-300 mb-6">Your one-stop destination for all things computer science.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
import React from "react";

export const AiBrain03Icon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <g xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
      <path d="M4 16.5a3 3 0 0 0 3 3a2.5 2.5 0 0 0 5 0a2.5 2.5 0 1 0 5 0a3 3 0 0 0 2.567-4.553a3.001 3.001 0 0 0 0-5.893A3 3 0 0 0 17 4.5a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0-5 0a3 3 0 0 0-2.567 4.553a3.001 3.001 0 0 0 0 5.893A3 3 0 0 0 4 16.5" />
      <path d="m7.5 14.5l1.842-5.526a.694.694 0 0 1 1.316 0L12.5 14.5m3-6v6m-7-2h3" />
    </g>
  </svg>
);

export const SoftwareLicenseIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <g xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
      <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m0-3h19M7 6h.009M11 6h.009" />
      <path d="m8 13l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L8 17m4 0h4" />
    </g>
  </svg>
);

export const NetworkIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width={size} height={size} fill={color} {...props}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M992 512H832v256h64q26 0 45 19t19 45v128q0 27-19 45.5t-45 18.5H704q-27 0-45.5-18.5T640 960V832q0-26 18.5-45t45.5-19h64V512H320v256h64q26 0 45 19t19 45v128q0 27-19 45.5t-45 18.5H192q-27 0-45.5-18.5T128 960V832q0-26 18.5-45t45.5-19h64V512H32q-13 0-22.5-9.5T0 480t9.5-22.5T32 448h480V256h-64q-27 0-45.5-18.5T384 192V64q0-26 18.5-45T448 0h192q26 0 45 19t19 45v128q0 27-19 45.5T640 256h-64v192h416q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 512z"
    />
  </svg>
);
