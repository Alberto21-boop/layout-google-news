import styled from 'styled-components';

export const Container = styled.div`
  // crianção de constante exportada, contendo um component styled de uma div
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
`;

export const UpperContent = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 8px;

  div.title {
    //seletor de classe title
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 10px;

    img {
      height: 26px;
      width: 77px;
    }

    h3 {
      cursor: pointer;
      color: #5f6368;
      font-weight: 400;
      font-size: 21px;
      padding: 4px;

      &.hover {
        color: #444444;
        text-decoration: underline;
      }
    }
  }

  div.search {
    display: flex;
    flex: 0.33;
    align-items: center;
    justify-content: space-between;

    input {
      //seletor de tag html input

      flex: 0.33;
      all: unset; // remove todos os estilos padrões do input

      background-color: #f1f3f4;

      height: 48px;
      width: 690px;
      padding-left: 30px;
      border-radius: 7px;
      margin-left: 52px;

      &:focus {
        background-color: #fff;
        box-shadow: 1px 1px 2px 1px #ddd;
      }
    }

    div.helpers {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-left: 30px;
    }
  }

  div.options {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2px;
  }
`;

export const Button = styled.button`
  // flex-direction: row; // Não se deve usar flex direction row, sem usar display flex, ele não funciona.

  all: unset; // remove todos os estilos padrões do botão

  display: flex; // faz com que o botão fique alinhado ao centro
  align-items: center;
  justify-content: center;

  padding: 0;

  width: 48px;
  height: 48px;

  border-radius: 50%;

  cursor: pointer;

  img {
    filter: brightness(0) saturate(100%) invert(40%) sepia(9%) saturate(288%)
      hue-rotate(173deg) brightness(90%) contrast(86%);
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #f5f5f5;
  }

  &.gridIcon {
    img {
      height: 16px;
      width: 16px;
    }
  }

  &.avatarIcon {
    img {
      filter: none;
      border-radius: 50%;
      height: 32px;
      width: 32px;
    }
  }
`;
