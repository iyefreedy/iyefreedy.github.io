import { useState, useEffect } from "react";

import "./index.scss";

import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I’m a dedicated Software Engineer passionate about creating
            innovative, user-centric web and mobile applications. With a strong
            foundation in PHP, JavaScript, Flutter, and Firebase, I’ve
            successfully developed scalable, high-performing solutions that
            drive efficiency and improve user experiences. I enjoy designing and
            deploying robust systems using technologies like Flask, React, and
            Firebase, always striving to deliver exceptional results. I’m
            looking to bring my problem-solving skills and technical expertise
            to a dynamic team where I can continue driving innovation and making
            a meaningful impact.
          </p>
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
};

export default About;
