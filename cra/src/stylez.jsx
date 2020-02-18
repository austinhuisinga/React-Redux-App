import styled from 'styled-components';

const QuoteDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const YeImg = styled.img`
  width: 40%;
  border: 1px transparent;
  border-radius: 10px;
  margin-bottom: 10px;
`

const QuoteButton = styled.button`
  width: 20%;
  background-color: #e66054;
  color: #2a1a1a;
  // h1: #D68A58 background: #b84447 tertiary: #e66054
`

const QuoteDiv2 = styled.div` 
  color: #2a1a1a;

`

export { 
  YeImg,
  QuoteDiv,
  QuoteButton,
  QuoteDiv2,
};