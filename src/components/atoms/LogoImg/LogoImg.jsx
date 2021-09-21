/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Logo from 'assets/images/logo.png';

const LogoImg = () => {
  const logoImgStyle = css`
    width: 103px;
    height: 36px;

    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <div>
      <img css={logoImgStyle} src={Logo} alt="logo_img"></img>
    </div>
  );
};

export default LogoImg;
