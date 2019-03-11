import styled from 'styled-components';

const StyledColor = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;

  &:not(:first-child) {
    margin-left: 1rem;
  }
`;

export default StyledColor;
