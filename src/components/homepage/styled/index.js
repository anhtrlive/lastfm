import styled from 'styled-components';

export const ListItem = styled.li `
    padding: 0 15px;
    border-bottom: 1px solid #ebebeb;
    &:hover {
      background: #ebebeb;
    }
`;

export const Article = styled.article `
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  section {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    p {
      margin-left: 15px;
      font-weight: bold;
      white-space: nowrap;
    }
  }
  a {
    color: #000;
    text-decoration: none;
    margin-left: 20px;
    &:hover {
      border-bottom: solid 2px #000;
    }
  }
  img {
    align-self: center
  }
`;