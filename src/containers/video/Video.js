import React, {useContext} from "react";
import "./Video.scss";
import {videoSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Video() {
  const {isDark} = useContext(StyleContext);

  if (!videoSection)
    console.error("videoSection object for Video section is missing");

  if (!videoSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="music">
        <div className="video-header">
          <h1 className="video-header-title">{videoSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode video-header-subtitle"
                : "subTitle video-header-subtitle"
            }
          >
            {videoSection.subtitle}
          </p>
        </div>
        <div className="video-main-div">
          {videoSection.videos.map((videoLink, i) => {
            if (!videoLink) {
              console.log(`Video link for ${videoSection.title} is missing`);
            }
            return (
              <div key={i}>
                <iframe
                  className="video"
                  src={videoLink}
                  frameBorder="0"
                  //scrolling="no"
                  title="YouTube video player"
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
