/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Label } from 'components/atoms';

const Footer = () => {
  const topWrapper = css`
    margin: 16px 0;
  `;
  const bottomWrapper = css`
    margin: 12px 0;
  `;
  return (
    <div>
      <div css={topWrapper}>
        <Label size="small" color="gray">
          소개 &middot; 도움말 &middot; 홍보 센터 &middot; API &middot; 채용
          정보&middot; 개인정보처리방침&middot;
        </Label>
        <Label size="small" color="gray">
          약관 &middot; 위치 &middot; 인기 계정 &middot; 해시태그 &middot; 언어
        </Label>
      </div>

      <div css={bottomWrapper}>
        <Label size="small" color="gray">
          © 2021 Instagram from Facebook
        </Label>
      </div>
    </div>
  );
};

export default Footer;
