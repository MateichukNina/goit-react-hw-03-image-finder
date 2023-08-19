import styled from 'styled-components';

export const Gallery = styled.ul`
  display: flex;
  max-width: calc(100vw - 48px);
  // gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
 
  margin-left: auto;
  margin-right: auto;
`;

export const Image = styled.li`
flex-basis: calc(33.33% - 10px);
margin: 5px; /* 
box-sizing: border-box;
`