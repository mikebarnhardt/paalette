import styled from 'styled-components';

const StyledSwatch = styled.div`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  /* border: 0.0625rem solid #484848; */
  /* border-radius: 0.125rem; */
  /* height: 4vh; */
  padding: 1rem;
  /* width: 4vw; */
`;

export default StyledSwatch;
