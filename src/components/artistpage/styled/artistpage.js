import styled from 'styled-components';

export const ArticleArtist = styled.article `
  display: flex;
  flex-direction: column;
  .imgWrapper {
    height: 225px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  section {
    border-top: 1px solid #ebebeb;
  }
  .display-text-group {
    padding: 15px 0;
  }
  .read-more-button {
    display: inline-block;
    curson: pointer;
    color: #2b65d9;
    &:after {
      border-bottom: solid 2px #fff;
      &:hover {
        border-bottom: solid 2px #2b65d9;
      }
    }
  }
`;

export const TagButton = styled.button `
  background: transparent;
  border-radius: 3px;
  border: 2px solid #2b65d9;
  color: #2b65d9;
  margin: 1em 1em;
  padding: 10px;
  cursor: pointer;
  opacity: 0.7;
  a {
    text-decoration: none;
  }
  &:hover {
    opacity: 1;
  }
`;