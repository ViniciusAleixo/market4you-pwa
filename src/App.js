
import './App.css';
import logo from './logo512.png';

import React, {useState} from 'react';


function App() {
  const [counterPlus, setCounterPlus] = useState(0);
  const [counterMin, setCounterMin] = useState(0);
  let total = (counterPlus + counterMin)

 
  

  return (
   
    <div className="container">
      <div className="content">
         
            <img src={logo} alt="logo"/>
          
          <div className="App">
          <strong>{total}</strong>
          </div>
          <div className="button">
          <button onClick={()=> setCounterMin(counterMin -1)}>-</button>
          <button onClick={()=> setCounterPlus(counterPlus +1)}>+</button>
          </div>
          <div className="total">Total Attendace: <strong>{counterPlus}</strong></div>
      </div>
    </div>
  );
}

export default App;
