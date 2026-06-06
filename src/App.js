import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Electron Explorer</h1>
        <p>Build desktop applications with Electron and React</p>
        
        <div className="card">
          <h2>Counter Demo</h2>
          <p>Count: <strong>{count}</strong></p>
          <div className="button-group">
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>

        <div className="info">
          <h3>Features:</h3>
          <ul>
            <li>✓ Electron & React Integration</li>
            <li>✓ Hot Reload in Development</li>
            <li>✓ IPC Communication Ready</li>
            <li>✓ Build for Production</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;