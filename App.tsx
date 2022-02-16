import React from 'react';
import './App.css';
import {NewComponent} from "./Components/NewComponent";

export const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]

function App() {
  return (
    <div className="App">
      <NewComponent cars={topCars}/>
    </div>
  );
}

export default App;
