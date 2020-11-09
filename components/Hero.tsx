import Link from "next/link";
import React from "react";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="w-4/6">
      <div className="text-sm font-semibold uppercase tracking-wide text-secondary sm:text-base lg:text-sm xl:text-base">
        React Fullstack Developer
      </div>
      <a href="https://twitter.com/zxffo" target="_blank">
        <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-secondary sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
          Lewis
          <span className="title"> Blackburn</span>
        </h2>
      </a>
      <p className="mt-3 text-base text-secondary sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        Hey! I'm Lewis or zxffo for short ... I write about my experiences with{" "}
        <span className="font-medium text-primary">
          Fullstack React development
        </span>
        ,<span className="font-medium text-primary"> Typescript</span> &amp;{" "}
        <span className="font-medium text-primary">side-projects</span>. You can
        see all the projects below, or you can go checkout my pinned projects on{" "}
        <Link href="https://github.com/yarnlock">
          <a className="font-medium text-variant">Github.</a>
        </Link>{" "}
        Right now, I'm working on a fullstack media database app including
        movies, shows, actors and the corresponding information such as
        soundtracks. If you would like to change theme press the heart logo!
      </p>
    </div>
  );
};
