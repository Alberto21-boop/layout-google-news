import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f0f8ff;
  height: 120vh;
  .secondCard {
    background-color: #ffff;
  }
`;

export const Content = styled.div`
  padding: 32px;
  flex-direction: column;
  display: flex;
  align-items: center;
  grid-column: span 8;
  justify-content: space-evenly;
  border-radius: 18px;

  margin: auto;
  width: calc(100% - 400px);

  & > section {
    display: flex;
    margin-top: 30px;
    gap: 20px;
    width: 100%;
  }

  .NewsAndDate {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font-size: 1.75rem;
      font-weight: 400;
    }
    h3 {
      font-weight: 400;
      color: #5f6368;
      font-size: 0.875rem;
    }
  }

  .LeftCards {
    width: 70%;

    .CardOne {
      background-color: #ffff;

      width: 100%;

      border-radius: 20px;
      padding: 16px;

      section {
        display: flex;
        gap: 20px;
        padding-top: 16px;

        & > div {
          width: 40%;
        }

        aside {
          padding: 10px;
          width: 60%;
        }

        hr {
          margin: 12px 0;
          filter: brightness(0) saturate(100%) invert(99%) sepia(0%)
            saturate(1192%) hue-rotate(149deg) brightness(88%) contrast(89%);
        }
      }
    }
  }

  .RightCards {
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > div {
      width: 100%;

      border-radius: 20px;
      padding: 16px;

      section {
        display: flex;
        flex-direction: column;
      }
      hr {
        margin: 12px 0;
        filter: brightness(0) saturate(100%) invert(99%) sepia(0%)
          saturate(1192%) hue-rotate(149deg) brightness(88%) contrast(89%);
      }
    }
  }

  & > div {
    //adiciona a estilização somente no primeiro nível (não afetando o filho dos filhos)
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const CardHeader = styled.header`
  display: flex;
  flex-direction: column;

  width: 100%;

  & > div {
    width: 100%;
    display: flex;
    align-items: baseline;
    gap: 8px;

    & > h1 {
      color: #1867dc;
      font-size: 1.25rem;
      line-height: 1.3;
      font-weight: 100;

      cursor: pointer;
    }

    img {
      width: 12px;
      height: 12px;

      filter: brightness(0) saturate(100%) invert(34%) sepia(15%)
        saturate(7332%) hue-rotate(199deg) brightness(94%) contrast(99%);
    }
  }

  &.secondCard {
    h1 {
      // Isso significa: CardHeader.paintHeader h1 {...}
      color: #00758c;
    }
    img {
      filter: brightness(0) saturate(100%) invert(24%) sepia(98%)
        saturate(2889%) hue-rotate(173deg) brightness(85%) contrast(101%);
    }
  }

  &.cardThird {
    h1 {
      // Isso significa: CardHeader.paintHeader h1 {...}
      color: #592fd0;
    }
  }

  hr {
    margin-top: 16px;
    filter: brightness(0) saturate(100%) invert(99%) sepia(0%) saturate(1192%)
      hue-rotate(149deg) brightness(88%) contrast(89%);
  }
`;
