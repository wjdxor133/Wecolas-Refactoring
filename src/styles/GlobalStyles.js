import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

const GlobalStyles = css`
  ${emotionReset}

  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  p {
    font-size: 14px;
  }

  strong {
    font-weight: bold;
  }
`;

export default GlobalStyles;
