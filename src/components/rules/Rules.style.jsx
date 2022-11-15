import styled from "styled-components";

export const StyledRulesWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  margin: 1em;
`;
export const StyledRulesContainer = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 8px;
  background-color: #fff;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em;
  }
  .head h3 {
    font-size: 24px;
    font-weight: 700;
  }

  .body {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .closeX {
    &:hover {
      cursor: pointer;
    }
  }
`;
