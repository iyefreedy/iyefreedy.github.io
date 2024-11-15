import "./index.scss";

import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import project1 from "../../assets/images/experiences/project-1.png";
import project2 from "../../assets/images/experiences/project-2.png";
import project3 from "../../assets/images/experiences/project-3.png";
import project4 from "../../assets/images/experiences/project-4.png";

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

          <div className="project-list">
            <div className="project-item">
              <img src={project1} alt="RMDB Movie" />
              <a href="https://freedcode-tmdb.netlify.app/" target="_blank">
                RMDB Movie
              </a>
            </div>

            <div className="project-item">
              <img src={project2} alt="Studentdesk UAI" />
              <a
                href="https://play.google.com/store/apps/details?id=com.uai.studentdesk&hl=en"
                target="_blank"
              >
                Studentdesk
              </a>
            </div>

            <div className="project-item">
              <img src={project3} alt="Revotify" />
              <a href="https://revotify.netlify.app/#" target="_blank">
                Revotify
              </a>
            </div>

            <div className="project-item">
              <img src={project4} alt="Revotify" />
              <a href="https://freedcode.shop/" target="_blank">
                FinVest
              </a>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" active />
    </>
  );
}
