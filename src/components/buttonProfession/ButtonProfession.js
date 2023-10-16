import React, {useState, useContext} from "react";
import "./ButtonProfession.scss";
import StyleContext from "../../contexts/StyleContext";
import emoji from "react-easy-emoji";

export default function ButtonProfession({text, className, href}) {
  const {isMusicianMode} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isMusicianMode);
  const styleContext = useContext(StyleContext);
  const onClick = function() {
    styleContext.changeProfession();
    setChecked(!isChecked);
  }

  return (
    <div className={className} onClick={onClick}>
      <a className="main-button" href={href}>
        <span className="point-emoji">
          {emoji("👉")}
        </span>
        {text}
      </a>
    </div>
  );
}
