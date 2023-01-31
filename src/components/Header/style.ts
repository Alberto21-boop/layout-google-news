import styled from 'styled-components';

export const Container = styled.div`
  // crianção de constante exportada, contendo um component styled de uma div
  background-color: #fff;
  display: flex;
  flex-direction: row;

  .logo {
    // seletor de classe logo
    height: 24px;
    width: 74px;
    margin: 15px;
    display: inline-block;
    vertical-align: middle;
  }

  input {
    // seletor de tag html input
    background-color: #f1f3f4;
    padding-left: 30px;
    height: 50px;
    width: 700px;
    margin: 10px;
    border-radius: 10px;
    opacity: 1;
    outline: none;
    border: none;
    &:focus {
      background-color: #fff;
      box-shadow: 1px 1px 2px 1px #ddd;
    }
  }

  h3 {
    height: 79px;
    width: 24px;
    cursor: pointer;
    color: #5f6368;
    opacity: 1;
    padding: 4px;
    position: absolute;
    left: 89px;
    top: 12px;
  }

  .textfield {
    padding-left: 290px;
    color: #5f6368;
  }
`;

export const Button = styled.button`
  flex-direction: row;
  border-radius: 50%;
  outline: none;
  border: none;
  display: inline-block;
  cursor: pointer;

  &.questionIcon {
    img {
      width: 24px;
      height: 24px;
      filter: brightness(0) saturate(100%) invert(40%) sepia(9%) saturate(288%)
        hue-rotate(173deg) brightness(90%) contrast(86%);
      position: absolute;
      top: 22px;
      right: 750px;
    }
    opacity: 30;
    margin: 25px;
    background-color: #fff;
  }

  &:hover {
    background-color: #f1f3f4;
    width: 70px;
    height: 70px;
  }

  .gearIcon {
    img {
      height: 24px;
      width: 24px;
      filter: brightness(0) saturate(100%) invert(40%) sepia(9%) saturate(288%)
        hue-rotate(173deg) brightness(90%) contrast(86%);
      position: absolute;
      top: 30px;
      right: 750px;
      opacity: 1;
      margin: 25px;
      cursor: pointer;
    }

    opacity: 1;
    margin: 25px;
    cursor: pointer;
  }

  .gridIcon {
    height: 16px;
    width: 16px;
    filter: brightness(0) saturate(100%) invert(40%) sepia(9%) saturate(288%)
      hue-rotate(173deg) brightness(90%) contrast(86%);
    opacity: 1;
    margin: 25px;
    position: absolute;
    right: 50px;
    cursor: pointer;
  }

  .avatarIcon {
    height: 32px;
    width: 32px;
    position: relative;
    right: -217px;
    border-radius: 50%;
    margin: 17px;
    cursor: pointer;
  }
`;
