import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 8px;
  letter-spacing: 2px;
  font-weight: 800;
  padding: 1em 2.5em;

  color: hsl(229, 25%, 31%);

  &:hover {
    cursor: pointer;
    color: red;
  }
`;
