import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  margin-top: 16px;

  gap: 24px;

  span {
    border-right: 1px solid #dadce0;
    height: 20px;
    padding: 1px;
  }

  div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 32px;

    a {
      font-family: 'Open Sans', sans-serif;
      font-size: 0.875rem; //14pxs
      color: #5f6368;
      font-weight: 500;

      &:hover {
        color: #444444;
        cursor: pointer;
      }

      &.active {
        color: #1a73e8;

        &:after {
          position: relative;
          content: '';
          display: block;
          height: 4px;
          width: 100%;
          background: #1a73e8;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          margin-top: 4px;
        }
      }
    }
  }
`;
