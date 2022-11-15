import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import { StyledScoreboard } from "./Scoreboard.style";

const Scoreboard = ({ score }) => {
  return (
    <StyledScoreboard>
      <div className="headline">
        <Logo className="logo" />
      </div>
      <div className="score-container">
        <p className="score-text">SCORE</p>
        <p className="score-number">{score}</p>
      </div>
    </StyledScoreboard>
  );
};

export default Scoreboard;
