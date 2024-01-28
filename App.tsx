import React from 'react';
import Router from './src/router';
import AppProvider from './src/utils/Context/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};

export default App;
