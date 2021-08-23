import React from 'react';
import Counter from './component/Counter';
import './App.css';

const App = () => {
  
  return (
    <div>
      <nav>
        <ul>
          <li>useState</li>
          <li>useEffect</li>
        </ul>
      </nav>
      <hr />
      <Counter />
    </div>);
}

export default App;