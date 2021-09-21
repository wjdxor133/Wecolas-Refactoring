/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTheme } from '@emotion/react';
import { Icon, Input, Button } from 'components/atoms';
import useInput from 'hooks/useInput';

const SendComment = () => {
  const theme = useTheme();
  const SendCommentStyle = css`
    height: 56px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    margin-top: 4px;
    border-top: 1px solid ${theme.colors.gray};
  `;

  const leftWrapper = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 8px;
  `;

  const [commentValue, onCommentValue] = useInput();

  return (
    <div css={SendCommentStyle}>
      <Icon type="far" name="smile" size="lg" />
      <div css={leftWrapper}>
        <Input
          borderLine="clear"
          placeholder="댓글 달기.."
          value={commentValue}
          onChange={onCommentValue}
        />
        <Button
          line="invisible"
          color="blue"
          state={commentValue === '' && 'disabled'}
        >
          게시
        </Button>
      </div>
    </div>
  );
};

export default SendComment;
