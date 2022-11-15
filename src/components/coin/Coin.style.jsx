import styled from "styled-components";

export const StyledCoin = styled.div`
  z-index: 2;
  border-radius: 50%;

  .player-win,
  .player-draw {
    border-radius: 50%;

    box-shadow: 0 0 0 15px rgb(43, 57, 86, 0.4), 0 0 0 30px rgb(43, 57, 86, 0.2),
      0 0 0 45px rgb(43, 57, 86, 0.2);
  }
  .house-lose,
  .house-draw {
    border-radius: 50%;

    box-shadow: 0 0 0 15px rgb(43, 57, 86, 0.4), 0 0 0 30px rgb(43, 57, 86, 0.2),
      0 0 0 45px rgb(43, 57, 86, 0.2);
  }
  .border {
    width: 100px;
    height: 100px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
      animation: around-outer 0.5s, ease-in-out forwards infinite;
      animation-iteration-count: infinite;
    }
  }

  .rock-border {
    background-image: radial-gradient(#df4262, #d7324e);

    box-shadow: 0 8px 0 #901d39;
    &:hover {
      animation: around-outer-one 0.3s, linear forwards infinite;
      animation-iteration-count: infinite;
    }
  }
  .paper-border {
    background-image: radial-gradient(#5771f0, #4763f4);

    box-shadow: 0 8px 0 #2b44c2;

    &:hover {
      animation: around-outer-two 0.3s, linear forwards infinite;
      animation-iteration-count: infinite;
    }
  }
  .scissors-border {
    background-image: radial-gradient(#e9a928, #e99e18);

    box-shadow: 0 8px 0 #cc7c1a;

    &:hover {
      animation: around-outer-three 0.3s, linear forwards infinite;
      animation-iteration-count: infinite;
    }
  }

  .pick {
    width: 70px;
    height: 70px;

    border-radius: 50%;

    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0 -5px 0 #bdbfd5;

    &:hover {
      animation: around-inner 0.5s, ease-in-out forwards infinite;
      animation-iteration-count: infinite;
    }
  }
  .icon {
    transform: scale(0.8);
  }

  @keyframes around-inner {
    0% {
      box-shadow: 0 -5px 0 #bdbfd5;
    }
    33% {
      box-shadow: 5px 0 0 #bdbfd5;
    }
    66% {
      box-shadow: 0 5px 0 #bdbfd5;
    }
    100% {
      box-shadow: -5px 0 0 #bdbfd5;
    }
  }

  @keyframes around-outer-one {
    0% {
      box-shadow: 0 8px 0 #901d39;
    }
    33% {
      box-shadow: -8px 0 0 #901d39;
    }
    66% {
      box-shadow: 0 -8px 0 #901d39;
    }
    100% {
      box-shadow: 8px 0 0 #901d39;
    }
  }
  @keyframes around-outer-two {
    0% {
      box-shadow: 0 8px 0 #2b44c2;
    }
    33% {
      box-shadow: -8px 0 0 #2b44c2;
    }
    66% {
      box-shadow: 0 -8px 0 #2b44c2;
    }
    100% {
      box-shadow: 8px 0 0 #2b44c2;
    }
  }
  @keyframes around-outer-three {
    0% {
      box-shadow: 0 8px 0 #cc7c1a;
    }
    33% {
      box-shadow: -8px 0 0 #cc7c1a;
    }
    66% {
      box-shadow: 0 -8px 0 #cc7c1a;
    }
    100% {
      box-shadow: 8px 0 0 #cc7c1a;
    }
  }
  @media screen and (min-width: 500px) {
    .border {
      width: 125px;
      height: 125px;
    }

    .pick {
      width: 85px;
      height: 85px;
    }
    .icon {
      transform: scale(0.8);
    }
    .player-win,
    .player-draw {
      border-radius: 50%;

      box-shadow: 0 0 0 25px rgb(43, 57, 86, 0.4),
        0 0 0 50px rgb(43, 57, 86, 0.2), 0 0 0 75px rgb(43, 57, 86, 0.2);
    }
    .house-lose,
    .house-draw {
      border-radius: 50%;

      box-shadow: 0 0 0 25px rgb(43, 57, 86, 0.4),
        0 0 0 50px rgb(43, 57, 86, 0.2), 0 0 0 75px rgb(43, 57, 86, 0.2);
    }
  }
  @media screen and (min-width: 700px) {
    .border {
      width: 150px;
      height: 150px;
    }

    .pick {
      width: 100px;
      height: 100px;
    }
    .icon {
      transform: scale(1);
    }
    .player-win,
    .player-draw {
      border-radius: 50%;

      box-shadow: 0 0 0 70px rgb(43, 57, 86, 0.4),
        0 0 0 140px rgb(43, 57, 86, 0.2), 0 0 0 210px rgb(43, 57, 86, 0.2);
    }
    .house-lose,
    .house-draw {
      border-radius: 50%;

      box-shadow: 0 0 0 70px rgb(43, 57, 86, 0.4),
        0 0 0 140px rgb(43, 57, 86, 0.2), 0 0 0 210px rgb(43, 57, 86, 0.2);
    }
  }

  @media screen and (min-width: 768px) {
    .border {
      width: 175px;
      height: 175px;
    }

    .pick {
      width: 125px;
      height: 125px;
    }
    .icon {
      transform: scale(1.2);
    }
  }
  @media screen and (min-width: 1024px) {
    .border {
      width: 250px;
      height: 250px;
    }

    .pick {
      width: 175px;
      height: 175px;

      box-shadow: 0 -7px 0 #bdbfd5;
    }
    .icon {
      transform: scale(1.8);
    }
  }
`;
