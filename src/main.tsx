import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import firebase from 'firebase/app'

// 本番環境のみ計測
if (process.env.NODE_ENV === 'production') {
  firebase.analytics();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
