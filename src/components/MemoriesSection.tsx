"use client";
import Memories from "./Memories";
import React from "react";

export default function MemoriesSection() {
  const items = [
    {
      image: "/assets/img/1.jpg",
      link: "https://www.instagram.com/techcrew24/",
      title: "Ilkom 24",
      description: "Masih botak bjir :v",
    },
    {
      image: "/assets/img/2.jpg",
      link: "https://www.instagram.com/techcrew24/",
      title: "Apalah",
      description: "This is pretty cool, right?",
    },
    {
      image: "/assets/img/3.jpg",
      link: "https://www.instagram.com/techcrew24/",
      title: "Winner 🔥",
      description: "Infokan Lawan Sepadan",
    },
    {
      image: "/assets/img/4.jpg",
      link: "https://www.instagram.com/techcrew24/",
      title: "UAS",
      description: "Nda tau kapan ini",
    },
  ];
  return <Memories items={items} />;
}
