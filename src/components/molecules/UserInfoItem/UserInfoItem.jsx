/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Avatar, Label, Button } from 'components/atoms';

const UserInfoItem = ({ user, avatarSize }) => {
  const userInfoItemStyle = css`
    display: flex;
    padding: 8px 0;
  `;

  const userInfoWrapper = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const leftWrapper = css`
    width: 75%;
    margin-left: 12px;
  `;

  const { user_img, user_id, user_name } = user;

  return (
    <div css={userInfoItemStyle}>
      <Avatar src={user_img} alt=" " size={avatarSize} />
      <div css={userInfoWrapper}>
        <div css={leftWrapper}>
          <Label thick="bold" color="black" cursor="pointer">
            {user_id}
          </Label>
          <Label color="gray">{user_name}</Label>
        </div>
        <Button line="invisible" color="blue" size="small">
          전환
        </Button>
      </div>
    </div>
  );
};

export default UserInfoItem;
