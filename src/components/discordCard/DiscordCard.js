import React from "react";
import "./DiscordCard.scss";

export default function DiscordCard({details}) {
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
            src={details.src} //"https://discord.com/widget?id=361602048975831040&theme=dark"
            maxWidth="30%"
            height="300"
            title="discord"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
