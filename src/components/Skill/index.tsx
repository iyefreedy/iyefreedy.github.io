import "./index.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export default function Skill() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={"Skills".split("")}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <ol>
            <li>
              Front-end
              <ul>
                <li>React</li>
                <li>NextJS</li>
                <li>Flutter</li>
              </ul>
            </li>
            <li>
              Back-end
              <ul>
                <li>NodeJS</li>
                <li>Python</li>
                <li>Dart</li>
                <li>PHP</li>
                <li>Firebase</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="stage-cub-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPhp} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" active />
    </>
  );
}
