import styled from 'styled-components';

const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid gainsboro;
  display: block;
  font: inherit;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;

  :focus,:hover {
    background-color: #f8f8f8;
    border-color: currentColor;
  }
`;

export default StyledInput;
