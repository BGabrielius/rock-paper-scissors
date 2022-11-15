import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { ReactComponent as CloseBtn } from "../../assets/icon-close.svg";
import { ReactComponent as RulesImage } from "../../assets/image-rules.svg";

import { StyledRulesWrapper, StyledRulesContainer } from "./Rules.style";

const Rules = ({ onClose }) => {
  // Side effects
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") onClose();
    });
  }, [onClose]);
  return ReactDOM.createPortal(
    <>
      <StyledRulesWrapper>
        <StyledRulesContainer>
          <div className="head">
            <h3>RULES</h3>
            <CloseBtn className="closeX" onClick={onClose} />
          </div>
          <div className="body">
            <RulesImage />
          </div>
        </StyledRulesContainer>
      </StyledRulesWrapper>
    </>,
    document.getElementById("portal")
  );
};

export default Rules;
