import React from "react";
import "./Top.scss";

import ToggleSwitchMusic from "../../components/ToggleSwitchMusic/ToggleSwitchMusic";
import "../modebutton/Mode.scss";

export default function Top() {
  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("topButton").style.visibility = "visible";
      document.getElementById("modeButton").style.visibility = "visible";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
      document.getElementById("modeButton").style.visibility = "hidden";
    }
  }
  window.onscroll = function () {
    scrollFunction();
  };
  window.onload = function () {
    scrollFunction();
  }; //To make sure that this button is not visible at starting.
  // When the user clicks on the button, scroll to the top of the document
  return (
    <div>
      <button onClick={TopEvent} id="topButton" title="Go to top">
        <i className="fas fa-hand-point-up" aria-hidden="true"></i>
      </button>
      <button onClick={TopEvent} id="modeButton" title="Go to mode">
        <ToggleSwitchMusic />
      </button>
    </div>
  );
}
