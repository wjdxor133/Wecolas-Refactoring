/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "@emotion/react";
import { Icon, Label } from "components/atoms";

const SearchButton = ({ onClick }) => {
  const theme = useTheme();
  const SearchButtonStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px ${theme.colors.gray};
    border-radius: 4px;
    padding: 3px 10px;
    background-color: ${theme.colors.light_gray};
    min-width: 215px;
    height: 28px;

    &:hover {
      cursor: text;
    }
  `;

  const SearchButtonWrapper = css`
    width: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  return (
    <div css={SearchButtonStyle} onClick={onClick}>
      <div css={SearchButtonWrapper}>
        <Icon
          type="fas"
          name="search"
          size="xs"
          color={theme.colors.dark_gray}
        />
        <Label color="gray" size="small">
          검색
        </Label>
      </div>
    </div>
  );
};

export default SearchButton;
