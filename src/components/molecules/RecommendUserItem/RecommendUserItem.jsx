/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Avatar, Label, Button } from "components/atoms";

const RecommendUserItem = ({ recommendedUser }) => {
  const recommendUserStyle = css`
    display: flex;
    padding: 8px 0;
  `;

  const recommendUserWrapper = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const leftWrapper = css`
    width: 75%;
    margin-left: 12px;
  `;

  const { user_img, user_id, user_info, user_following } = recommendedUser;

  return (
    <div css={recommendUserStyle}>
      <Avatar src={user_img} alt=" " size="small" />
      <div css={recommendUserWrapper}>
        <div css={leftWrapper}>
          <Label thick="bold" color="black" cursor="pointer">
            {user_id}
          </Label>
          <Label size="small" color="gray" length="limit">
            {user_info}
          </Label>
        </div>
        <Button line="invisible" color="blue" size="small">
          {user_following ? "팔로잉" : "팔로우"}
        </Button>
      </div>
    </div>
  );
};

export default RecommendUserItem;
