/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "@emotion/react";
import { UserInfoItem } from "components/molecules";
import {
  Header,
  StoryList,
  RecommendUserList,
  Footer,
  Post,
} from "components/organisms";

const MainTemplate = ({ data }) => {
  const theme = useTheme();
  const mainWrapper = css`
    width: 100%;
    background-color: ${theme.colors.light_gray};
  `;

  const mainInnerWrapper = css`
    width: 65%;
    margin: 0 auto;
    padding-top: 80px;
    display: grid;
    grid-template-columns: 65% auto;
  `;

  const rightWrapper = css`
    width: 293px;
    position: fixed;
    right: 250px;
    margin-top: 20px;
  `;

  const { stories, posts, user, recommendedUsers } = data;

  return (
    <div css={mainWrapper}>
      <Header />
      <main css={mainInnerWrapper}>
        <div>
          <section>
            <StoryList stories={stories} />
          </section>
          <article>
            {posts.map((post, idx) => {
              return <Post key={idx} post={post} />;
            })}
          </article>
        </div>
        <div css={rightWrapper}>
          <UserInfoItem user={user} avatarSize="normal" labelSize="small" />
          <RecommendUserList recommendedUsers={recommendedUsers} />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default MainTemplate;
