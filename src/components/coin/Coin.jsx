import { useState, useEffect } from "react";
import { ReactComponent as Rock } from "../../assets/icon-rock.svg";
import { ReactComponent as Paper } from "../../assets/icon-paper.svg";
import { ReactComponent as Scissors } from "../../assets/icon-scissors.svg";

import { StyledCoin } from "./Coin.style";

const Coin = ({ action, picked, holder, winner }) => {
  return (
    <StyledCoin>
      <div className={`${holder}-${winner}`}>
        <div className={`border ${picked}-border`} onClick={action}>
          <div className="pick">
            {picked === "rock" && <Rock className="icon" />}
            {picked === "paper" && <Paper className="icon" />}
            {picked === "scissors" && <Scissors className="icon" />}
          </div>
        </div>
      </div>
    </StyledCoin>
  );
};

export default Coin;
