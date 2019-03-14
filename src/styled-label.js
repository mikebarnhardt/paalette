import styled from 'styled-components';

const StyledLabel = styled.label`
  align-items: center;
  display: inline-flex;
  font: inherit;
  font-weight: 600;

  & > input {
    margin-right: 0.5rem;
  }
`;

export default StyledLabel;
