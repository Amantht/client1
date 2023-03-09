import { useState } from 'react';
import './App.css';

function App() {
  const [a,setA]=useState(5);
  function handleButton(){
    setA(10);
    console.log(a);
  }
  // const a=10;
    return (
    <div>
      
      <button onClick={handleButton}> Change value</button>
        The value of a is {a}
    </div>
  );
}

export default App;