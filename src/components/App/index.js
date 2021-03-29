// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'src/containers/Header';
import Sidebar from 'src/containers/Sidebar';
import Main from 'src/containers/Main';
import LiveStream from 'src/containers/LiveStream';
// == Import
import './app.scss';

// == Composant
const App = ({ loadStreams }) => {
  useEffect(() => {
    loadStreams();
  }, []);

  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/live/:slug" component={LiveStream} />
      </Switch>
    </div>
  );
};

// == Export
export default App;
