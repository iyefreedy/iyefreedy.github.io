import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";

export default function Experience() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              idx={15}
              letterClass={letterClass}
              strArray={"Experiences".split("")}
            />
          </h1>
        </div>
      </div>
      <Loader type="pacman" active />
    </>
  );
}
