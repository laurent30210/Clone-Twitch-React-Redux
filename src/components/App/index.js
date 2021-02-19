// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Sidebar from 'src/components/Sidebar';
import Main from 'src/components/Main';
// == Import
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Sidebar />
    <Main />
  </div>
);

// == Export
export default App;
