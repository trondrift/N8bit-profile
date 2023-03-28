import React, {useContext} from "react";
import "./Discord.scss";
import DiscordCard from "../../components/discordCard/DiscordCard";
import {discordSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Talks() {
  const {isDark} = useContext(StyleContext);
  if (!discordSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
          <h1 className="talk-header-title">{discordSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode talk-header-subtitle"
                : "subTitle talk-header-subtitle"
            }
          >
            {discordSection.subtitle}
          </p>
          <div className="talk-cards-div">
            <DiscordCard
              details={{
                title: discordSection.info.title,
                subtitle: discordSection.info.subtitle,
                slides_url: discordSection.info.join_url,
                event_url: discordSection.info.register_url,
                image: discordSection.info.image,
                src: discordSection.info.src,
                isDark
              }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
