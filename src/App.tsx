import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './styles/main';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
