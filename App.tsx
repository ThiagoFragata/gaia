import React from 'react';

import { AppProvider } from './src/global/hooks';
import { Routes } from './src/routes';

function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

export default App;
