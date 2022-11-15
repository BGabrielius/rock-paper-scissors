import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1em;
  background-image: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 1280px;
    padding: 0 1em;
    gap: 6em;
  }

  .game-wrapper {
    width: 100%;
    height: 350px;
    max-width: 300px;
    min-width: 300px;
    position: relative;

    margin: 0 auto;
  }

  .triangle {
    transform: scale(0.7);
    left: 0;
    margin-top: 40px;
  }
  .positioning-rock {
    position: absolute;

    bottom: 60px;
    left: 105px;
  }
  .positioning-paper {
    position: absolute;

    top: 50px;
    left: 40px;
  }
  .positioning-scissors {
    position: absolute;

    top: 50px;
    right: 20px;
  }
  .btn-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  @media screen and (min-width: 500px) {
    .container {
      padding: 0 2em;
    }
    .game-wrapper {
      max-width: 350px;
      min-width: 350px;
    }
    .positioning-rock {
      bottom: 40px;
      left: 110px;
    }
    .positioning-paper {
      position: absolute;

      top: 30px;
      left: 40px;
    }
    .positioning-scissors {
      position: absolute;

      top: 30px;
      right: 40px;
    }
    .triangle {
      transform: scale(0.8);
    }
  }
  @media screen and (min-width: 700px) {
    .container {
      padding: 0 3em;
    }
    .game-wrapper {
      max-width: 500px;
    }
    .triangle {
      transform: scale(1);
    }
    .positioning-rock {
      position: absolute;

      bottom: 20px;
      left: 170px;
    }
    .positioning-paper {
      position: absolute;

      top: 0;
      left: 70px;
    }
    .positioning-scissors {
      position: absolute;

      top: 0;
      right: 75px;
    }
  }

  @media screen and (min-width: 768px) {
    .game-wrapper {
      height: 410px;
    }

    .positioning-rock {
      left: 155px;
      bottom: 30px;
    }
    .positioning-paper {
      left: 50px;
    }
    .positioning-scissors {
      right: 60px;
    }
  }

  @media screen and (min-width: 1024px) {
    .game-wrapper {
      height: 600px;
      min-width: 700px;
    }
    .triangle {
      height: 60%;
      transform: scale(1.3);
      margin-top: 70px;

      padding-top: 50px;
    }

    .positioning-rock {
      left: 220px;
      bottom: 40px;
    }
    .positioning-paper {
      left: 70px;
    }
    .positioning-scissors {
      right: 70px;
    }
  }
`;

export const StyledResultWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  height: 500px;
  width: 100%;

  .winner-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    z-index: 3;

    position: absolute;
    top: 0;
  }

  .winner-message {
    color: white;
    font-weight: 800;
    font-size: 28px;
    letter-spacing: 2px;

    animation: bounceInDown;
    animation-duration: 3s;
  }
  .play-again-btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 0.4em;

    animation: bounceInUp;
    animation-duration: 3s;
  }

  .picked-container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    gap: 5em;
    padding-top: 5em;

    width: 100%;
    height: 100%;

    animation: zoomInDown;
    animation-duration: 2s;

    overflow: visible;
  }

  .picked {
    color: #fff;
    font-weight: 700;
    opacity: 0.95;

    z-index: 3;

    font-size: 14px;
  }
  @media screen and (min-width: 400px) {
    .picked {
      font-size: 16px;
      letter-spacing: 1px;
    }
  }

  @media screen and (min-width: 700px) {
    .winner-container {
      position: static;
    }

    .winner-message {
      font-size: 30px;
    }
    .picked-container {
      flex-direction: column;
      justify-content: space-around;

      gap: 0;
      padding-top: 0;
    }
    .picked {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 768px) {
    .picked {
      font-size: 20px;
    }
    .winner-message {
      font-size: 34px;
    }
  }

  @media screen and (min-width: 1024px) {
    .winner-message {
      font-size: 48px;
    }
  }
  @media screen and (min-width: 1280px) {
    .winner-message {
      font-size: 64px;
    }
  }
`;
