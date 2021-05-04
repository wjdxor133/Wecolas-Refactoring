/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "@emotion/react";

const Button = ({ children, line, color, size, state }) => {
  const theme = useTheme();
  const defaultStyle = css`
    font-weight: bold;
    cursor: pointer;
  `;

  const colors = {
    blue: css`
      color: ${theme.colors.blue};
    `,

    black: css`
      color: ${theme.colors.black};
    `,
  };

  const lines = {
    invisible: css`
      border: none;
      outline: none;
      background-color: inherit;
    `,
  };

  const sizes = {
    small: css`
      font-size: 12px;
    `,
  };

  const states = {
    disabled: css`
      opacity: 0.5;
    `,
  };

  return (
    <div>
      <button
        css={[
          defaultStyle,
          lines[line],
          colors[color],
          sizes[size],
          states[state],
        ]}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
