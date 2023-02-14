import styled from 'styled-components';
interface ContainerProps {
  isMain: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  gap: 4px;

  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;

    div {
      display: flex;
      gap: 5px;
      align-items: center;
      margin-bottom: 10px;

      img {
        display: flex;
        height: 14px;
        width: 14px;
      }

      h3 {
        all: unset;
        font-size: 12px;
      }
    }

    p {
      font-size: 14px;
    }

    span {
      display: flex;
      margin-top: 5px;

      font-size: 12px;
      color: #444746;
    }
  }

  & > img {
    height: 60px;
    width: 60px;
    border-radius: 15px;
  }

  ${({ isMain }) => {
    return isMain
      ? `
    display: flex;
    flex-direction: column-reverse;

    & > img {
      height: 165px;
      width: 280px;
      border-radius: 15px;
    }
    `
      : ``;
  }}
`;
