import { styled } from "styled-components";

export const Card = styled.div`
    background-image: ${({ imgSrc }) =>
    `linear-gradient(rgba(1, 1, 1, 0.2), rgba(1, 1, 1, 0.2)), url(${imgSrc})`};
    background-size: cover;
    box-shadow: ${({ isHovered }) =>
    isHovered ? "0 8px 16px rgba(0, 0, 0, 0.2)" :  "0 4px 8px rgba(0, 0, 0, 0.2)"};
    transition: box-shadow 0.3s ease;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(211, 211, 211, 0.3);
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 1;
    }

    &:hover::after {
        opacity: 1;
    }
`

export const HorizontalScroll = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 8px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;