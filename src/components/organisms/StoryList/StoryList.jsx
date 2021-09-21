/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTheme } from '@emotion/react';
import { SlideShow } from 'components/atoms';
import { StoryItem } from 'components/molecules';

const StoryList = ({ stories }) => {
  const theme = useTheme();

  const storyListStyle = css`
    border: 1px solid ${theme.colors.gray};
    width: 100%;
    background-color: ${theme.colors.white};
    border-radius: 3px;
    margin-bottom: 24px;
  `;

  return (
    <div css={storyListStyle}>
      <SlideShow slidesToShow={4} variableWidth adaptiveHeight>
        {stories.map((story, idx) => {
          return <StoryItem story={story} key={idx} />;
        })}
      </SlideShow>
    </div>
  );
};

export default StoryList;
