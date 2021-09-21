/** @jsx jsx */
import { useRef, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import { useTheme } from '@emotion/react';
import { Icon, Input } from 'components/atoms';
import useInput from 'hooks/useInput';

const SearchBar = ({ visible, onBlur }) => {
  const theme = useTheme();
  const SearchBarStyle = css`
    display: flex;
    align-items: center;
    border: solid 1px ${theme.colors.white};
    padding: 3px 10px;
    border-radius: 4px;
    background-color: ${theme.colors.light_gray};
    min-width: 215px;
    height: 28px;
  `;

  const rightWrapper = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const [searchValue, onSearchValue] = useInput();
  const inputRef = useRef();

  useEffect(() => {
    visible && inputRef.current.focus();
  }, [visible, inputRef]);

  return (
    <div css={SearchBarStyle}>
      <Icon type="fas" name="search" size="xs" color={theme.colors.dark_gray} />
      <div css={rightWrapper}>
        <Input
          type="type"
          value={searchValue}
          inputRef={inputRef}
          placeholder="검색"
          onChange={onSearchValue}
          onBlur={onBlur}
          borderLine="clear"
        />
        <Icon
          type="fas"
          name="times-circle"
          size="xs"
          color={theme.colors.dark_gray}
          onClick={onBlur}
        />
      </div>
    </div>
  );
};

export default SearchBar;
