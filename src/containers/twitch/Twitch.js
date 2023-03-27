import React, {useContext} from "react";
import "./Twitch.scss";
import {twitchSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Twitch() {
  const {isDark} = useContext(StyleContext);

  if (!twitchSection)
    console.error("videoSection object for Video section is missing");

  if (!twitchSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="twitch">
        <div className="twitch-header">
          <h1 className="twitch-header-title">{twitchSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode twitch-header-subtitle"
                : "subTitle twitch-header-subtitle"
            }
          >
            {twitchSection.subtitle}
          </p>
        </div>
        <div className="twitch-main-div">
          {twitchSection.channel.map((twitchLink, i) => {
            if (!twitchLink) {
              console.log(`Twitch link for ${twitchSection.title} is missing`);
            }
            return (
              <div key={i}>
                <iframe
                  src="https://player.twitch.tv/?channel=sir_ej_tv&parent=www.hanstech.io"
                  className="twitch"
                  title="twitchstream"
                  frameborder="0"
                  allowfullscreen="true"
                  scrolling="no"
                  height="378"
                  width="620"
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
