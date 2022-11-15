import { useState, useEffect } from "react";
import Rules from "../rules/Rules";
import Scoreboard from "../scoreboard/Scoreboard";
import Button from "../button/Button";

import { ReactComponent as Triangle } from "../../assets/bg-triangle.svg";

import { StyledWrapper, StyledResultWrapper } from "./Game.style";
import Coin from "../coin/Coin";

import useDetermineWinner from "../../hooks/useDetermineWinner";

const Game = () => {
  // - Variables
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // - State
  const [isMounted, setIsMounted] = useState(false);
  const [yourPick, setYourPick] = useState("");
  const [housePick, setHousePick] = useState("");
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const [toggleRules, setToggleRules] = useState(false);

  // - Hooks
  const data = useDetermineWinner(yourPick, score);

  // - Side effects
  useEffect(() => {
    if (yourPick && data) {
      setHousePick(data.housePick);
      setIsMounted(true);
    }
    if (data && isMounted) {
      setMessage(`YOU ${data.winner?.toUpperCase()}`);
      async function updateScore() {
        await delay(1000);
        setScore(data.score);
      }
      updateScore();
    }
  }, [yourPick, data, isMounted]);

  // - Functions

  const pickRock = () => setYourPick("rock");
  const pickPaper = () => setYourPick("paper");
  const pickScissors = () => setYourPick("scissors");
  const pickReset = () => setYourPick("");

  const openRulesModal = () => setToggleRules(true);
  const closeRulesModal = () => setToggleRules(false);

  return (
    <StyledWrapper>
      <div className="container">
        <Scoreboard score={score} />
        {!yourPick && (
          <div className="game-wrapper">
            <Triangle className="triangle" />
            <div className="positioning-rock">
              <Coin
                absolute={true}
                picked="rock"
                action={pickRock}
                className="rock"
              />
            </div>
            <div className="positioning-paper">
              <Coin
                absolute={true}
                picked="paper"
                action={pickPaper}
                className="paper"
              />
            </div>
            <div className="positioning-scissors">
              <Coin
                absolute={true}
                picked="scissors"
                action={pickScissors}
                className="scissors"
              />
            </div>
          </div>
        )}
        {yourPick && (
          <StyledResultWrapper>
            <div className="picked-container">
              <h3 className="picked">YOU PICKED</h3>
              <Coin
                picked={yourPick}
                className="results-coin"
                holder="player"
                winner={data?.winner}
              />
            </div>
            <div className="winner-container">
              <h2 className="winner-message">{message}</h2>
              <div className="play-again-btn-container">
                <Button text="PLAY AGAIN" action={pickReset} />
              </div>
            </div>
            <div className="picked-container">
              <h3 className="picked">THE HOUSE PICKED</h3>
              <Coin
                picked={housePick}
                className="results-coin"
                holder="house"
                winner={data?.winner}
              />
            </div>
          </StyledResultWrapper>
        )}
      </div>
      <div className="btn-wrapper">
        <Button text="RULES" theme="secondary" action={openRulesModal} />
        {toggleRules && <Rules onClose={closeRulesModal} />}
      </div>
    </StyledWrapper>
  );
};

export default Game;
