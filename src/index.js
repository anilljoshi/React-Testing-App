import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

//components
import Root from "./containers/Root.js";
import store from "./store.js";

import { AppContainer } from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>	
      	<MuiThemeProvider> 
      		<Component />
      	</MuiThemeProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}

render(Root);

if (module.hot) {
  module.hot.accept("./containers/Root.js", () => { render(Root) });
}