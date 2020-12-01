import styled from 'styled-components';

export const SearhInput = styled.input `
  padding: 0.7em;
  margin: 0.5em;
  font-size: 1em;
  color: #000;
  background: #ebebeb;
  border: solid 2px #000;
  border-radius: 3px;
  &:focus,
  :hover {
    border: solid 2px #2b65d9;
    outline: 0;
  }
`;

export const SubmitButton = styled.button `
  background: #ebebeb;
  border: solid 2px #000;
  border-radius: 3px;
  padding: 0.7em;
  margin: 0.6em;
  cursor: pointer;
  font-weight: 600;
  a {
    text-decoration: none;
  }
  &:hover {
    border: solid 2px #2b65d9;
    outline: 0;
  }
`;

export const ListItem = styled.li `
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1px solid #ebebeb;
  padding: 0 15px;
  &:hover {
    background: #ebebeb;
  }
  a {
    color: #000;
    text-decoration: none;
    margin-left: 20px;
    &:hover {
      border-bottom: solid 2px #000;
    }
  }
  p {
    font-weight: 600;
  }
`;