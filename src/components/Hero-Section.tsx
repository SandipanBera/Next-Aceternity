"use client";
import React from 'react'
import Button from './Button'
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function HeroSection() {
    const words = [
        {
          text: "Welcome",
        },
        {
          text: "awesome",
        },
        {
          text: "pepole,",
        },
        {
          text: "let's",
        },
        {
          text: " go.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
  return (
    <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="sm:text-center">
        <TypewriterEffectSmooth words={words} />
        <p className="mt-3 text-lg sm:mt-5 sm:text-xl md:mt-5 md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center gap-2">
          <Button>Get Started</Button>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default HeroSection