/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Img = ({ src, alt }) => {
  const imgStyle = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;
  return (
    <div>
      <img css={imgStyle} src={src} alt={alt} />
    </div>
  );
};

export default Img;
