import { useState } from "react";

const getHousePick = () => {
  let housePick = "";
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      housePick = "rock";
      break;
    case 1:
      housePick = "paper";
      break;
    case 2:
      housePick = "scissors";
      break;
    default:
      return;
  }
  return housePick;
};

const useDetermineWinner = (yourPick, score) => {
  const [isMounted, setIsMounted] = useState(false);
  const [pickReset, setPickReset] = useState(false);
  const [data, setData] = useState({
    winner: "",
    housePick: "",
    score: 0,
  });

  // console.log("isMounted", isMounted);
  // console.log("pickReset", pickReset);

  if (yourPick === "" && !isMounted) {
    setIsMounted(true);
    return;
  }

  if (!pickReset && isMounted && yourPick === "") {
    setPickReset(true);
  }

  const housePick = getHousePick();

  if (yourPick && pickReset) {
    if (yourPick === "rock") {
      switch (housePick) {
        case "rock":
          setData({ winner: "draw", housePick: housePick, score: score });
          break;
        case "paper":
          setData({
            winner: "lose",
            housePick: housePick,
            score: score > 0 ? --score : score,
          });
          break;
        case "scissors":
          setData({ winner: "win", housePick: housePick, score: ++score });
          break;
        default:
          break;
      }
    }
    if (yourPick === "paper") {
      switch (housePick) {
        case "rock":
          setData({ winner: "win", housePick: housePick, score: ++score });
          break;
        case "paper":
          setData({ winner: "draw", housePick: housePick, score: score });
          break;
        case "scissors":
          setData({
            winner: "lose",
            housePick: housePick,
            score: score > 0 ? --score : score,
          });
          break;
        default:
          break;
      }
    }
    if (yourPick === "scissors") {
      switch (housePick) {
        case "rock":
          setData({
            winner: "lose",
            housePick: housePick,
            score: score > 0 ? --score : score,
          });
          break;
        case "paper":
          setData({ winner: "win", housePick: housePick, score: ++score });
          break;
        case "scissors":
          setData({ winner: "draw", housePick: housePick, score: score });
          break;
        default:
          break;
      }
    }
    setPickReset(false);
  }
  // console.log("data from hook", data);
  return data;
};

export default useDetermineWinner;
