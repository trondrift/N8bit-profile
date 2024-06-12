import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
//import musicPerson from "../../assets/lottie/39134-music";
import greetingPerson from "../../assets/lottie/creativity-pana.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const {isMusicianMode} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              {isMusicianMode ? (
                <div>
                  <h1
                    className={
                      isDark ? "dark-mode greeting-text" : "greeting-text"
                    }
                  >
                    {" "}
                    {greeting.title}{" "}
                    <span className="wave-emoji">{emoji("🎷")}</span>
                  </h1>
                </div>
              ) : (
                <div className="logo-image-div">
                  <img
                    alt="Hanstech"
                    src={require("../../assets/images/Hanstech-final-logo-2-04-crop.png")}
                  ></img>
                </div>
              )}
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {isMusicianMode ? greeting.subTitleMusic : greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                {greeting.resumeLink && (
                  // <Button
                  //   text={isMusicianMode ? "My Music" : "See my resume"}
                  //   newTab={isMusicianMode ? false : true}
                  //   href={isMusicianMode ? "#music" : greeting.resumeLink}
                  // />
                  <Button
                  text={isMusicianMode ? "My Music" : "My Music"}
                  newTab={isMusicianMode ? false : false}
                  href={isMusicianMode ? "#music" : "#music"}
                />
                )}
                {/* {greeting.quoteLink && (
                  <Button
                    text={"Quote A Website"}
                    newTab={true}
                    href={greeting.quoteLink}
                  />
                )} */}
                <Button text="Contact me" href="#contact" />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              //<DisplayLottie animationData={greetingPerson} />
              <img
                alt="profile pic"
                src={
                  isMusicianMode
                    ? require("../../assets/images/profile-picsax.png")
                    : require("../../assets/images/profile-pic5.png")
                }
              ></img>
            ) : (
              <img
                alt="profile pic"
                src={
                  isMusicianMode
                    ? require("../../assets/images/profile-picsax.png")
                    : require("../../assets/images/profile-pic5.png")
                }
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
