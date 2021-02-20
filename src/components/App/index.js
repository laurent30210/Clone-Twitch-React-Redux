// == Import npm
import React, { useEffect } from 'react';
import Header from 'src/components/Header';
import Sidebar from 'src/components/Sidebar';
import Main from 'src/components/Main';
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
      <Main />
    </div>
  );
};

// == Export
export default App;
