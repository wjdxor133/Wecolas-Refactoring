/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Input = ({ borderLine, inputRef, ...props }) => {
  const inputStyle = css`
    background-color: inherit;
  `;

  const borderLines = {
    clear: css`
      border: none;
      outline: none;
    `,
  };

  return (
    <div>
      <input
        css={[inputStyle, borderLines[borderLine]]}
        ref={inputRef}
        {...props}
      />
    </div>
  );
};

export default Input;
