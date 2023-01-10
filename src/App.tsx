import React from 'react';
import './App.css';
import {Card} from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card textLabel='HOLD'/>
      <Card textLabel={'WIP'}/>
      <Card textLabel={'Open'}/>
      <Card textLabel={'WIP'}/>
      <Card textLabel={'Open'}/>
    </div>
  );
}

export default App;
