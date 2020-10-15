import React from 'react';

import Rooting from './containers/routing';
import WrapperPage from "./commons/WrapperContainer/WrapperPage";

import {Provider} from 'react-redux' ;
import {store} from 'commons/store';

// styles
const App: React.FC = () => {
  // todo... Nick Litvin... must be default router
  return (
    <Provider store={store}>
      <WrapperPage>
        <Rooting/>
      </WrapperPage>
    </Provider>
  );
};

export default App;
