import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const {isMusicianMode} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              {/* <h1 className="experience-heading">Professional Experience</h1> */}
              <h1 className="experience-heading"></h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  if (1) {
                    if (i > 0) {
                      return (
                        <ExperienceCard
                          key={i}
                          isDark={isDark}
                          overrideLogo={card.overridelogo}
                          cardInfo={{
                            company: card.company,
                            desc: card.desc,
                            date: card.date,
                            companylogo: card.companylogo,
                            role: card.role,
                            descBullets: card.descBullets
                          }}
                        />
                      );
                    } else {
                      return "";
                    }
                  } else {
                    return (
                      <ExperienceCard
                        key={i}
                        isDark={isDark}
                        overrideLogo={card.overridelogo}
                        cardInfo={{
                          company: card.company,
                          desc: card.desc,
                          date: card.date,
                          companylogo: card.companylogo,
                          role: card.role,
                          descBullets: card.descBullets
                        }}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
