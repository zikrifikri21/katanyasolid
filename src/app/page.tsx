"use client";

import { HeroSectionNew, ScrollVelocity, Gallery, FlowingMenu, MemoriesSection, ParallaxSection } from "@/components";

import Image from "next/image";
import React from "react";
import { AiBrain03Icon, SoftwareLicenseIcon, NetworkIcon } from "./AiBrain03Icon";

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
