import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Initially my journey in the tech field started at the end of 2019 when I took HTML & CSS lessons at FreeCode Academy, however it wasn't until 2021 that I made the decision to delve deeper into this field. I started studying Python but it didn't seem that interesting at first. I did a bit more research on websites and immediately started taking HTML and CSS classes & currently I´m studying the MERN Stack. Also, I took some UI/UX courses & noticed that I really enjoy creating, and making my projects look more beautiful and more user-friendly.
            Outside of this, I like to spend time racing <a href="https://www.youtube.com/watch?v=5BVpUcgb10M" target="_blank" rel="noopener noreferrer">rental karts</a>, playing the Guitar with my <a href="https://www.instagram.com/p/CShivDilJEg/?utm_source=ig_web_copy_link" target="_blank" rel="noopener noreferrer">Rock band</a>, whether reading books or speaking about philosophy with my friends.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
