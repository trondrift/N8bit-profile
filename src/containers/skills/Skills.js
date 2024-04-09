import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/63921-developer";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import ButtonProfession from "../../components/buttonProfession/ButtonProfession";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const {isMusicianMode} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}
            </h1>
            <div>
              <ButtonProfession
                className="project-button"
                text={
                  isMusicianMode ? "Tech Profile Here" : "Musicians Click Here"
                }
                href={"#"}
              />
            </div>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {isMusicianMode
                ? skillsSection.subTitleMusic
                : skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {isMusicianMode
                ? skillsSection.skillsMusic.map((skills, i) => {
                    return (
                      <p
                        key={i}
                        className={
                          isDark
                            ? "dark-mode subTitle skills-text"
                            : "subTitle skills-text"
                        }
                      >
                        {skills}
                      </p>
                    );
                  })
                : skillsSection.skills.map((skills, i) => {
                    return (
                      <p
                        key={i}
                        className={
                          isDark
                            ? "dark-mode subTitle skills-text"
                            : "subTitle skills-text"
                        }
                      >
                        {skills}
                      </p>
                    );
                  })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
