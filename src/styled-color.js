import styled from 'styled-components';

const StyledColor = styled.div`
  background-color: white;
  border: 1px solid rgba(16, 32, 48, 0.16);
  border-radius: 0.125rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;

  &:not(:first-child) {
    margin-left: 1rem;
  }
`;

export default StyledColor;
