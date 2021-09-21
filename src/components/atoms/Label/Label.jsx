/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTheme } from '@emotion/react';

const Label = ({ children, color, size, thick, cursor, length }) => {
  const theme = useTheme();

  const colors = {
    gray: css`
      color: ${theme.colors.dark_gray};
    `,

    black: css`
      color: ${theme.colors.black};
    `,

    blue: css`
      color: ${theme.colors.blue};
    `,
  };

  const sizes = {
    small: css`
      font-size: 12px;
    `,
  };

  const thicks = {
    bold: css`
      font-weight: bold;
    `,
  };

  const cursors = {
    pointer: css`
      cursor: pointer;
    `,
  };

  const lengths = {
    limit: css`
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `,
  };

  return (
    <div>
      <p
        css={[
          colors[color],
          sizes[size],
          thicks[thick],
          cursors[cursor],
          lengths[length],
        ]}
      >
        {children}
      </p>
    </div>
  );
};

export default Label;
