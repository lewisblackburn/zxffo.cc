import Link from "next/link";
import React from "react";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = ({}) => {
  const tags = {
    Website: "bg-blue-400",
    Shell: "bg-red-400",
    "Chrome Extension": "bg-orange-500",
    React: "bg-green-500",
  };
  const cards = [
    {
      link: "https://github.com/yarnlock/neofetch.sh",
      emoji: "",
      title: "neofetch.sh",
      tag: "Website",
      description: "This was an old portfolio project to learn typescript.",
    },
    {
      link: "https://github.com/yarnlock/dotfiles",
      emoji: "️🖥",
      title: "dotfiles",
      tag: "Shell",
      description:
        "These are my dotfiles and the scripts that I use to setup my mac.",
    },
    {
      link: "https://github.com/yarnlock/HotdogNotHotdog",
      emoji: "🌭",
      title: "HotdogNotHotdog",
      tag: "Website",
      description: "The revolutionary app from the show Silicon Valley.",
    },
    {
      link: "https://github.com/yarnlock/remscroll",
      emoji: "📜",
      title: "remscroll",
      tag: "Chrome Extension",
      description:
        "A chrome extension that removes scrollbars from sites with a hotkey.",
    },
    {
      link: "https://github.com/yarnlock/10fastestfingers",
      emoji: "⌨️",
      title: "10fastestfingers",
      tag: "Chrome Extension",
      description:
        "A chrome extension that allows you to cheat at 10fastfingers.",
    },
    {
      link: "https://github.com/yarnlock/Flow",
      emoji: "💦",
      title: "Flow",
      tag: "React",
      description:
        "A site I created when learning how to use react that uses themoviedb.org api.",
    },
  ];
  return (
    <section className="relative mx-auto">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ link, emoji, title, tag, description }) => (
          <Link key={title} href={link}>
            <a>
              <li className="col-span-1 bg-secondary rounded-lg overflow-hidden shadow-md hover:shadow-lg transition ease-in-out duration-150">
                <div className="w-full flex items-center justify-between p-4 md:p-6 space-x-3 sm:space-x-6">
                  <span className="text-3xl">{emoji}</span>
                  <div className="flex-1 ">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-primary text-md leading-5 truncate font-bold">
                        {title}
                      </h3>
                      <span
                        className={`
                        flex-shrink-0 inline-block px-2 py-0.5 text-xs leading-4 font-medium text-primary rounded-full
                        ${tags[tag]} 
                        `}
                      >
                        {tag}
                      </span>
                    </div>
                    <p className="mt-1 text-secondary text-sm leading-5">
                      {description}
                    </p>
                  </div>
                </div>
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </section>
  );
};
