import styled from "styled-components";

export const StyledScoreboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 2px solid hsl(217, 16%, 45%);

  border-radius: 15px;
  width: 100%;
  max-width: 200px;
  padding: 1em;

  .headline {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  .logo {
    transform: scale(0.6);
  }

  .score-container {
    width: 100px;
    height: 100px;
    background-color: #fff;

    border-radius: 10px;
    padding: 0.5em;
  }

  .score-text {
    color: hsl(229, 64%, 46%);
    font-weight: 600;
    letter-spacing: 1px;
  }

  .score-number {
    color: hsl(229, 25%, 31%);
    font-size: 50px;
    font-weight: 700;
  }
  @media screen and (min-width: 550px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 768px;

    .logo {
      transform: scale(0.8);
    }
  }

  @media screen and (min-width: 768px) {
    .logo {
      transform: scale(1);
    }
    .score-container {
      width: 150px;
      height: 150px;
      background-color: #fff;

      border-radius: 10px;
      padding: 1em;
    }

    .score-number {
      color: hsl(229, 25%, 31%);
      font-size: 80px;
      font-weight: 700;
    }
  }
`;
