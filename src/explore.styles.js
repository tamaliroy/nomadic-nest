import styled from "styled-components";

export const Title = styled.h1`
    color: #0d416f;
    font-weight: 700;
    font-size: 1.5rem;
`;

export const SubTitle = styled.h3`
    color: #7e8288;
    font-size: 1rem;
    width: 50rem;
    margin-top: 1rem;
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 2.5rem;
    overflow: auto;
`;

export const GridContainer = styled.div`
  display: grid;
  gap: 24px;

  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
