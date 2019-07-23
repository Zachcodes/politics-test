import styled, { css } from 'styled-components';

const Div = styled.div`
  ${({ flex, direction, justify, align }) =>
    flex &&
    css`
      display: flex;
      flex-direction: ${direction ? direction : 'row'};
      justify-content: ${justify ? justify : 'flex-start'};
      align-items: ${align ? align : 'initial'};
    `}
`;

export default Div;
