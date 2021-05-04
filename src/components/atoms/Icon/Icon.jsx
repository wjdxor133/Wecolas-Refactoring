/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FontAwesomeIcons";

const Icon = ({ type, name, size, color, cursor, onClick }) => {
  const iconStyle = {
    pointer: css`
      cursor: pointer;
    `,
  };
  return (
    <FontAwesomeIcon
      icon={[`${type}`, `${name}`]}
      size={`${size ? size : "1x"}`}
      color={color}
      css={iconStyle[cursor]}
      onClick={onClick}
    />
  );
};

export default Icon;
