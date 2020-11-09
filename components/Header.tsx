import Link from "next/link";
import { useLastFM } from "use-last-fm";
// @ts-ignore
import Typewriter from "typewriter-effect";
import { useEffect } from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const handleClick = () => {
    var d = document.querySelector("body");
    if (d!.classList.contains("theme-light")) {
      d!.classList.remove("theme-light");
      localStorage.removeItem("theme");
    } else {
      d!.classList.add("theme-light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    var m = localStorage.getItem("theme");
    var d = document.querySelector("body");
    if (m == "light") {
      d!.classList.add("theme-light");
    }
  }, []);

  const lastFM = useLastFM("xphte", "0ff1e85d509cdbd4ee5d2e4d0e916d01");
  return (
    <div className=" flex items-center justify-between h-48 opacity-75 text-primary  ">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex">
          <img
            onClick={() => handleClick()}
            className="cursor-pointer"
            alt="test"
            src="../logo.svg"
          />
        </div>
        <div className="flex items-center">
          {lastFM.status !== "playing" ? (
            <Typewriter
              options={{
                strings: ["Not listening to anything"],
                autoStart: true,
                deleteSpeed: 3e600000,
              }}
            />
          ) : (
            <div className="flex items-center">
              <div className="mr-2 w-2 h-2 bg-accent rounded-full"></div>
              <Typewriter
                options={{
                  strings: [lastFM.song.name + " by " + lastFM.song.artist],
                  autoStart: true,
                  deleteSpeed: 3e600000,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
