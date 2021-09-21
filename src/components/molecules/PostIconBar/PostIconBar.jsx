/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Icon } from 'components/atoms';

const PostIconBar = () => {
  const postIconBarStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
    height: 40px;
  `;

  const leftWrapper = css`
    width: 15%;
    display: flex;
    justify-content: space-between;
  `;
  return (
    <div css={postIconBarStyle}>
      <div css={leftWrapper}>
        <Icon type="far" name="heart" size="lg" cursor="pointer" />
        <Icon type="far" name="comment" size="lg" cursor="pointer" />
        <Icon type="far" name="paper-plane" size="lg" cursor="pointer" />
      </div>
      <Icon type="far" name="bookmark" size="lg" cursor="pointer" />
    </div>
  );
};

export default PostIconBar;
