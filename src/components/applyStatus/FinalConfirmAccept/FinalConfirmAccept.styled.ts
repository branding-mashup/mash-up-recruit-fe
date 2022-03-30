import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ShootingStar from '@/assets/svg/shooting-star.svg';
import Cocoazzang from '@/assets/svg/cocoazzang.svg';

export const FinalConfirmAccept = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    max-width: 92rem;
    margin: 0 auto;
    white-space: pre-wrap;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      max-width: 100%;
      padding: 0 6rem 7.6rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      flex-flow: column nowrap;
      padding: 0 0 7.6rem;
    }
  `}
`;

export const NoticeSection = styled.div`
  ${({ theme }) => css`
    width: 39.5rem;
    padding: 6.5rem 0;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      width: 100%;
      padding: 3.2rem 0;
    }

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      width: 100%;
      padding: 0;
    }
  `}
`;

export const NoticeMessage = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold26};
    margin-bottom: 1.6rem;
    color: ${theme.colors.white};
    font-style: normal;
    letter-spacing: -0.08rem;
    word-break: keep-all;

    & > em {
      color: ${theme.colors.purple60};
      font-style: normal;
    }

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      ${theme.fonts.kr.bold22};
    }
  `}
`;

export const NoticeDetail = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium15};
    color: ${theme.colors.white};
    letter-spacing: -0.08rem;

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      ${theme.fonts.kr.regular14};
    }
  `}
`;

export const OtDetailSection = styled.div`
  ${({ theme }) => css`
    width: 47.15rem;
    margin-left: 4rem;
    padding: 3.6rem 4.4rem;
    background: rgba(98, 68, 255, 0.08);
    border: 0.1rem solid ${theme.colors.purple70};
    border-radius: 2rem;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      width: 100%;
    }

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      width: 100%;
      margin-top: 4rem;
      margin-left: 0;
      padding: 2.4rem;
    }
  `}
`;

export const OtDetailHeading = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    color: ${theme.colors.gray50};
    letter-spacing: -0.08rem;
  `}
`;

export const OtDetailContent = styled.time`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold22};
    display: block;
    margin-top: 0.4rem;
    margin-bottom: 1.6rem;
    color: ${theme.colors.white};
    letter-spacing: -0.08rem;
    word-break: keep-all;

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      ${theme.fonts.kr.bold18};
    }
  `}
`;

export const OtExplanationList = styled.ul`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium13};
    margin-left: 1.83rem;
    color: ${theme.colors.gray50};
    letter-spacing: -0.08rem;
    list-style: disc;
  `}
`;

export const ShootingStarIcon = styled(ShootingStar)`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 3.5rem;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      top: unset;
      bottom: 0;
      left: 10rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      left: 4rem;
    }
  `}
`;

export const CocoazzangIcon = styled(Cocoazzang)`
  ${({ theme }) => css`
    position: absolute;
    right: 3.5rem;
    bottom: 0;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      right: 10rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      right: 4rem;
    }
  `}
`;
