import styled from 'styled-components';

const StyledColor = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  overflow: hidden;

  @media screen and (min-width: 640px) {
    &:not(:first-child) {
      margin-left: 1rem;
    }
  }
`;

export default StyledColor;
