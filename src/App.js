import React from 'react';
import './App.css';
import TarzanCalculator from './components/tarzancalc';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }

  render() {
    return(
      <div style={{display:'block', float:'left', justifyContent:'space-between', marginLeft:'250px', marginTop:'50px', backgroundColor:'#444952', padding:'20px', borderRadius:'15px'}}>
        <h1 style={{fontFamily:'monospace', textAlign:'center', backgroundColor:'#6497b1', borderRadius:'10px', color:'white'}}> Tarzan skills calculator </h1>
        <TarzanCalculator />
      </div>

    )
  }
};

export default App;
