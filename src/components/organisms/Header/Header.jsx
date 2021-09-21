/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import { useTheme } from '@emotion/react';
import { LogoImg, Icon, Avatar } from 'components/atoms';
import { SearchButton, SearchBar } from 'components/molecules';

const Header = () => {
  const theme = useTheme();

  const headerStyle = css`
    width: 100%;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.gray};
    background-color: ${theme.colors.white};
    position: fixed;
    z-index: 2;
  `;

  const headerInnerWrapper = css`
    width: 65%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const iconWrapper = css`
    width: 222px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const [visible, setVisible] = useState(false);
  const handleSearchBarShow = () => {
    setVisible(!visible);
  };

  return (
    <header css={headerStyle}>
      <div css={headerInnerWrapper}>
        <LogoImg />
        {visible ? (
          <SearchBar visible={visible} onBlur={handleSearchBarShow} />
        ) : (
          <SearchButton onClick={handleSearchBarShow} />
        )}
        <div css={iconWrapper}>
          <Icon type="fas" name="home" size="lg" cursor="pointer" />
          <Icon type="far" name="paper-plane" size="lg" cursor="pointer" />
          <Icon type="far" name="compass" size="lg" cursor="pointer" />
          <Icon type="far" name="heart" size="lg" cursor="pointer" />
          <Avatar
            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/25007874_506309469752451_193908878537129984_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ChlVKgnIf1kAX9y4Hk4&edm=ABfd0MgBAAAA&ccb=7-4&oh=291920a2e6cfca04d3765454e6b92c4d&oe=60B12D36&_nc_sid=7bff83"
            alt="user"
            size="smaller"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
