import { HOME_PAGE } from '@/constants';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Nav = styled.nav`
  position: relative;
  align-self: flex-end;
`;

interface NavListProps {
  isScrollTop: boolean;
  currentPage: string;
}

export const NavList = styled.ul<NavListProps>`
  ${({ theme, isScrollTop, currentPage }) => css`
    display: flex;
    align-items: center;
    height: 2.7rem;

    & > li {
      ${theme.fonts.kr.bold18}
      margin: 0 2rem;

      &:first-of-type {
        margin-left: 0;
      }
      &:nth-of-type(2) {
        display: flex;
        align-items: center;
        margin-right: 0;
        svg {
          margin-left: 4rem;
        }
      }
      &:last-of-type {
        margin-right: 0;
        margin-left: 4rem;
      }

      & > a {
        color: ${isScrollTop && currentPage === HOME_PAGE
          ? theme.colors.white
          : theme.colors.gray80};
      }

      & > a:hover {
        color: ${theme.colors.purple70};
      }
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      & > li {
        ${theme.fonts.kr.medium15};

        margin: 0 1rem;

        &:first-of-type {
          margin-left: 0;
        }
        &:nth-of-type(2) {
          display: flex;
          align-items: center;
          margin-right: 0;
          svg {
            margin-left: 2rem;
          }
        }
        &:last-of-type {
          margin-right: 0;
          margin-left: 2rem;
        }
      }
    }
  `}
`;

interface SignInButtonProps {
  isScrollTop: boolean;
  currentPage: string;
}

export const SignInButton = styled.button<SignInButtonProps>`
  ${({ theme, isScrollTop, currentPage }) => css`
    ${theme.fonts.kr.bold18}
    padding: 0;
    color: ${isScrollTop && currentPage === HOME_PAGE ? theme.colors.white : theme.colors.gray80};
    background: transparent;
    border: 0;

    &:hover {
      color: ${theme.colors.purple70};
    }
    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.kr.medium15};
    }
  `}
`;

interface MyPageButtonProps {
  isScrollTop: boolean;
  currentPage: string;
  isOpenMyPageTab: boolean;
}

export const MyPageButton = styled.button<MyPageButtonProps>`
  ${({ theme, isScrollTop, currentPage, isOpenMyPageTab }) => css`
    ${theme.fonts.kr.bold18}
    padding: 0;
    color: ${isScrollTop && currentPage === HOME_PAGE ? theme.colors.white : theme.colors.gray80};
    background: transparent;
    border: 0;

    &:hover {
      color: ${theme.colors.purple70};
    }
    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.kr.medium15};
    }
    & > span {
      margin-right: 0.6rem;
    }

    & > svg {
      transition: 0.4s;

      ${isOpenMyPageTab
        ? css`
            transform: rotate(-180deg);
          `
        : css`
            transform: rotate(deg);
          `};

      & > path {
        stroke: ${isScrollTop && currentPage === HOME_PAGE
          ? theme.colors.white
          : theme.colors.gray80};
      }
    }
  `}
`;
