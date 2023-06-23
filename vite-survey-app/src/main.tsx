import React from 'react'
import './index.css'
import App from './App'
import liff from '@line/liff'
import {generateEnv} from './generateEnv';
import LiffMockPlugin from '@line/liff-mock';
import { createRoot } from 'react-dom/client'

if (import.meta.env.VITE_NODE_ENV !== 'production') {
  liff.use(new LiffMockPlugin());
  // https://github.com/line/liff-mock
}

const {liffId, mock} = generateEnv();

const opstion = {liffId: liffId, mock: mock}

liff
  .init(opstion)
  .then(async () => {
    if (!liff.isLoggedIn()) {
      await liff.login();
    }
    const container = document.getElementById('root')
    if (!container) throw new Error('Failed to find the root element')
    createRoot(container).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  })
  .catch((e) => {
    alert(`LIFF error: ${e.message}`)
  })