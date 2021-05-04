/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Label, Button } from "components/atoms";

const UserInfoHeader = () => {
  const userInfoHeaderStyle = css`
    display: flex;
    justify-content: space-between;
    padding: 4px 0;
  `;
  return (
    <div css={userInfoHeaderStyle}>
      <Label thick="bold" color="gray">
        회원님을 위한 추천
      </Label>
      <Button size="small" color="black" line="invisible">
        모두 보기
      </Button>
    </div>
  );
};

export default UserInfoHeader;
