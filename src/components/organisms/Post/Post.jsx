/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "@emotion/react";
import { Img, Label, SlideShow } from "components/atoms";
import {
  PostHeader,
  PostContents,
  PostIconBar,
  CommentItem,
  SendComment,
} from "components/molecules";

const Post = ({ post }) => {
  const theme = useTheme();

  const postStyle = css`
    background-color: ${theme.colors.white};
    border: 0.5px solid ${theme.colors.gray};
    margin-bottom: 60px;
  `;

  const sliderWrapper = css`
    /* width: 614px;  */
  `;

  const contentsWrapper = css`
    padding: 0 16px;
  `;

  const commentShowWrapper = css`
    margin: 3px 0;
  `;

  return (
    <div css={postStyle}>
      <PostHeader post={post} />
      <section css={sliderWrapper}>
        <SlideShow
          dots
          slidesToShow={1}
          variableWidth={false}
          adaptiveHeight={false}
        >
          {post.post_img.map((src, idx) => {
            return <Img key={idx} src={src} alt="이미지" />;
          })}
        </SlideShow>
      </section>
      <section css={contentsWrapper}>
        <PostIconBar />
        <PostContents />
        {post.comments.length > 1 && (
          <div css={commentShowWrapper}>
            <Label
              color="gray"
              cursor="pointer"
            >{`댓글 ${post.comments.length}개 모두보기`}</Label>
          </div>
        )}
        {post.comments.map((comment, idx) => {
          return <CommentItem key={idx} comment={comment} />;
        })}
      </section>
      <SendComment />
    </div>
  );
};

export default Post;
