import { useState } from 'react';
import './App.css';

function App({store}) {
  function handleButton1(){
    store.dispatch({type:"Login",data:{un:"User1",role:"1"}});
  }
  function handleButton2(){
    store.dispatch({type:"Logout"});
  }

    return (
    <div>
      
      <button onMouseOver={handleButton1} onMouseLeave={handleButton2}>Touch me </button>
        The store's state 1 reducer value is {store.getState().State1Reducer.map((obj)=>(
          <div>
            {obj}
            </div>
        ))}
</div>
  );
}

export default App;