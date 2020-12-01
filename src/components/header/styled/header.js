import styled from 'styled-components';

export const Main = styled.main `
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 20px;
  margin: auto;
  margin-top: 70px;
  max-width: 1080px;
  min-width: 560px;
  flex-wrap: wrap;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  form {
    display: flex;
    justify-content: space-between;
    input {
      width: 100%;
    }
  }
`;

export const Navigation = styled.nav `
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background: #090a0b;
  ul {
    margin: 0 auto;
    padding: 0;
    max-width: 1040px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    min-width: 560px;
    li {
      position: relative;
      display: block;
      padding: 12px;
      color: #fff;
      white-space: nowrap;
    }
  }
  a {
    position: relative;
    display: block;
    padding: 12px;
    color: #fff;
    text-decoration: none;
    color: #fff;
    padding: 0;
    line-height: 40px;
    opacity: .85;

    &:hover {
      opacity: 1;
    }
  }
`;