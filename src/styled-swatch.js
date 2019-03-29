import styled from 'styled-components';

const StyledSwatch = styled.div`
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 0 0 0 transparent;
  display: flex;
  font-weight: 600;
  height: 4rem;
  justify-content: center;
  margin-bottom: 0.5rem;
  transition: box-shadow .2s ease;
  width: 4rem;

  ${props => props.hasWarning && `
    box-shadow: 0 0 0 4px orange;
    `}

  ${props => props.hasError && `
    box-shadow: 0 0 0 4px red;
  `}

  ${props => props.size === 'small' && `
    font-size: 0.75rem;
    height: 2.5rem;
    width: 2.5rem;

    :first-child {
      margin-right: 0.5rem;
    }

    :last-child {
      margin-left: 0.5rem;
    }
  `}
`;

export default StyledSwatch;
