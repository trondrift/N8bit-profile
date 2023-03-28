import React, {useState, useContext} from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitchMusic.scss";

const ToggleSwitchMusic = () => {
  const {isMusicianMode} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isMusicianMode);
  const styleContext = useContext(StyleContext);

  return (
    <div style={{display: "flex"}}>
      <label className="switch">
        <input
          type="checkbox"
          checked={isMusicianMode}
          onChange={() => {
            styleContext.changeProfession();
            setChecked(!isChecked);
          }}
        />
        <span className="slider round">
          <span className="emoji">{isChecked ? emoji("🎷") : emoji("👨‍💻")}</span>
        </span>
      </label>
    </div>
  );
};
export default ToggleSwitchMusic;
