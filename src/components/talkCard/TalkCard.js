import React from "react";
import "./TalkCard.scss";

export default function TalkCard({talkDetails}) {
  return (
    <div>
      <div className="container">
        <div style={{display: "flex"}}>
          <div className="image-content-profile">
            <img
              src={"https://github.com/trondrift.png"}
              alt={"DanishIsNate"}
              className="profile-image"
            />
          </div>
          <iframe
            style={{marginTop: 50}}
            src="https://discord.com/widget?id=361602048975831040&theme=dark"
            maxWidth="30%"
            height="300"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
          {/* <div
          className={
            talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
          }
        >
          <div className="diagonal-fill"></div>
          <div className="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

          <div className="card-footer-button-div">
            <a href={talkDetails.slides_url} target="_" className="talk-button">
              Join Server
            </a>
            <a href={talkDetails.event_url} target="_" className="talk-button">
              Register
            </a>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}
