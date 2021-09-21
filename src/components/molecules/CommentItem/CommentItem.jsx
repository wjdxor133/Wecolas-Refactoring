/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Label, Icon } from 'components/atoms';

const CommentItem = ({ comment }) => {
  const CommentItemStyle = css`
    display: flex;
    justify-content: space-between;
  `;

  const leftWrapper = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 4px;
  `;

  return (
    <div css={CommentItemStyle}>
      <Label thick="bold">{comment.user_id}</Label>
      <div css={leftWrapper}>
        <Label>{comment.contents}</Label>
        <Icon type="far" name="heart" size="xs" cursor="pointer" />
      </div>
    </div>
  );
};

export default CommentItem;
