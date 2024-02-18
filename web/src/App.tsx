import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Connect2Phantom from './components/Connect2Phantom';

function App() {

  return (
    <>

      <h1>Vite + React</h1>
      <div className="card">

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    <Connect2Phantom/>

    </>
  )
}

export default App
