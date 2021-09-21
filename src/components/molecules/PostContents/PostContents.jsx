/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Label } from 'components/atoms';

const PostContents = () => {
  const postContentsTop = css`
    margin-top: 8px;
    margin-bottom: 6px;
  `;
  const postContentsStyle = css`
    /* padding: 0 16px; */
  `;
  const userInfoWrapper = css`
    display: flex;
    margin-bottom: 4px;
  `;
  return (
    <div css={postContentsStyle}>
      <div css={postContentsTop}>
        <Label>
          <strong>8oong</strong>님 <strong>여러 명</strong> 이 좋아합니다
        </Label>
      </div>
      <div css={userInfoWrapper}>
        <Label thick="bold">8oong</Label>
        <Label>아토믹 디자인 적용하는 중...</Label>
      </div>
    </div>
  );
};

export default PostContents;
