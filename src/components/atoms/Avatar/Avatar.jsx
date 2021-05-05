/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "@emotion/react";

const Avatar = ({ src, alt, size, line }) => {
  const theme = useTheme();
  const avatarStyle = css`
    border: 0.5px solid ${theme.colors.gray};
    border-radius: 50%;
    object-fit: cover;
  `;

  const sizes = {
    large: css``,

    normal: css`
      width: 56px;
      height: 56px;
    `,

    small: css`
      width: 32px;
      height: 32px;
    `,

    smaller: css`
      width: 22px;
      height: 22px;
    `,
  };

  const lines = {
    outLine: css`
      position: relative;
      padding: 4px;

      ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50px;
        padding: 2px;
        background: linear-gradient(
          45deg,
          ${theme.colors.purple},
          ${theme.colors.pink}
        );
        -webkit-mask: linear-gradient(${theme.colors.white} 0 0) content-box,
          linear-gradient(${theme.colors.white} 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
      }
    `,
  };

  return (
    <div css={lines[line]}>
      <img css={[avatarStyle, sizes[size]]} src={src} alt={alt}></img>
    </div>
  );
};

export default Avatar;
