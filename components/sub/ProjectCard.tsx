"use client";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="relative p-4 bg-[#0d0d0d]">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

        <button
          onClick={() => alert(`More info about: ${title}`)}
          className="mt-4 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg shadow-md hover:from-purple-600 hover:to-cyan-600 transition-colors duration-300"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
