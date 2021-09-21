/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTheme } from '@emotion/react';
import { Avatar, Label, Icon } from 'components/atoms';

const PostHeader = ({ post }) => {
  const theme = useTheme();
  const peedHeaderStyle = css`
    display: flex;
    align-items: center;
    padding: 12px 16px;
    background-color: ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.gray};
  `;
  const rightWrapper = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 8px;
  `;

  const { user_id, user_img, post_location } = post;

  return (
    <div css={peedHeaderStyle}>
      <Avatar src={user_img} alt={`${user_id}님의 이미지`} size="small" />
      <div css={rightWrapper}>
        <div>
          <Label thick="bold">{user_id}</Label>
          <Label size="small">{post_location}</Label>
        </div>
        <Icon type="fas" name="ellipsis-h" size="xs" cursor="pointer" />
      </div>
    </div>
  );
};

export default PostHeader;
