import React, {useState, useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitchMusic.scss";

const ToggleSwitchMusic = () => {
  const {isMusicianMode} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isMusicianMode);
  const styleContext = useContext(StyleContext);

  return (
    <div style={{display: "flex"}}>
      <span role="img" aria-hidden="true" style={{paddingRight: "15px"}}>
        🧑‍💼
      </span>
      <label className="switch">
        <input
          type="checkbox"
          checked={isMusicianMode}
          onChange={() => {
            styleContext.changeProfession();
            setChecked(!isChecked);
          }}
        />
        <span className="slider round"></span>
      </label>
      <span role="img" aria-hidden="true" style={{paddingLeft: "15px"}}>
        🎷
      </span>
    </div>
  );
};
export default ToggleSwitchMusic;
