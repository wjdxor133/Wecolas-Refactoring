/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { RecommendUserItem, UserInfoHeader } from "components/molecules";

const RecommendUserList = ({ recommendedUsers }) => {
  const userInfoListStyle = css`
    width: 100%;
    margin: 12px 0;
  `;

  return (
    <div css={userInfoListStyle}>
      <UserInfoHeader />
      {recommendedUsers.map((recommendedUser, idx) => {
        return (
          <RecommendUserItem key={idx} recommendedUser={recommendedUser} />
        );
      })}
    </div>
  );
};

export default RecommendUserList;
