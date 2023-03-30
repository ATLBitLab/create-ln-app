import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LightningStore, LightningStoreContext } from './lightning/LightningStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const AppWithProviders = () => {
  const [ lightningStore ] = useState<LightningStore>(new LightningStore());

  useEffect(() => {
    lightningStore.initialize("", "");
  }, [lightningStore]);

  return (
    <LightningStoreContext.Provider value={lightningStore}>
      <App />
    </LightningStoreContext.Provider>
  )
}


root.render(
  <React.StrictMode>
    <AppWithProviders />
  </React.StrictMode>
);
