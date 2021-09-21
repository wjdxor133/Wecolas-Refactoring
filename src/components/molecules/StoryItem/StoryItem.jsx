/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Avatar, Label } from 'components/atoms';

const StoryItem = ({ story }) => {
  const storyItemStyle = css`
    margin: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  `;

  const textWrapper = css`
    margin-top: 8px;
  `;

  const { user_img, user_id } = story;

  return (
    <div css={storyItemStyle}>
      <Avatar
        src={user_img}
        alt={`${user_id}님의 스토리 이미지`}
        size="normal"
        line="outLine"
      />
      <div css={textWrapper}>
        <Label color="black" size="small">
          {user_id}
        </Label>
      </div>
    </div>
  );
};

export default StoryItem;
