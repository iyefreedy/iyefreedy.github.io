import { FormEventHandler, useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef<HTMLFormElement>(null);

  const position: LatLngExpression = [-6.459348003123701, 106.80184035729049];

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail: FormEventHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r0n1iqg",
        "template_twugknr",
        refForm.current as HTMLFormElement,
        { publicKey: "loshRG79sAxS25iK0" }
      )
      .then(
        () => {
          alert("Message sucessfullt sent!");
        },
        () => {
          alert("Failed to send the message, please try again!");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          Muhammad Quraisy,
          <br />
          Indonesia,
          <br />
          Pabuaran No.17,
          <br />
          Bogor
          <br />
          <span>iye.fredickson@gmail.com</span>
        </div>

        <div className="map-wrap">
          <MapContainer center={position} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>I lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" active />
    </>
  );
};

export default Contact;
