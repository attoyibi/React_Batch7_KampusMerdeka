import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useStore from './store/useStore'
function App() {
  const [count, setCount] = useState(0);
  const zustandStore = useStore((state) => state);
  const bears = useStore((state) => state.userData);
  const incrementCount = useStore((state) => state.incrementCount);
  useEffect(() => {
    console.log('zustandStore =', zustandStore)
    console.log('bears =', bears)
    console.log('increament =', incrementCount)
  }, []);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <input type="text" onChange={(e) => setCount(e.target.value)} />
      <div className="card">
        <button onClick={() => incrementCount(count)}>
          count is {bears}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
