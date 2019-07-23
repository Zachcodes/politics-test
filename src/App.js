import React from 'react';
import routes from './routes';
import Header from './components/Header';
import styled from 'styled-components';
import Div from './styled/Div';

const ViewContainer = styled(Div)`
  padding: 20px 30px;
`;

function App() {
  return (
    <div>
      <Header />
      <ViewContainer flex justify="center">
        {routes}
      </ViewContainer>
    </div>
  );
}

export default App;
