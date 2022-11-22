import React, {useContext} from "react";
import "./Audio.scss";
import {audioSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Audio() {
  const {isDark} = useContext(StyleContext);

  if (!audioSection)
    console.error("audioSection object for Audio section is missing");

  if (!audioSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="music">
        <div className="audio-header">
          <h1 className="audio-header-title">{audioSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode audio-header-subtitle"
                : "subTitle audio-header-subtitle"
            }
          >
            {audioSection.subtitle}
          </p>
        </div>
        <div className="audio-main-div">
          {audioSection.audio.map((audioLink, i) => {
            if (!audioLink) {
              console.log(`Audio link for ${audioSection.title} is missing`);
            }
            return (
              <div key={i}>
                <iframe
                  className="audio"
                  src={audioLink}
                  frameBorder="0"
                  //scrolling="no"
                  title="Spotify audio player"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  //loading="lazy"
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
