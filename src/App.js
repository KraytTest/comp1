import React, { PureComponent } from 'react';

import "./styles/less/styles.css";

import SubscriptionProvider from "./components/SubscriptionProvider";
import ContextProvider from "./components/ContextProvider";

import Table from './Table';

export {
  ContextProvider,
  SubscriptionProvider,
}

class App extends PureComponent {

  render() {

    const {
      children,
      ...other
    } = this.props;

    return (
      <div
        {...other}
      >
        <Table />
      </div>
    );
  }
}

export default App;