import React from 'react';
import './App.css';
import DisplayCard from './components/Greet';
import Buttons from './components/buttons'
class App extends React.Component
{
  state={equation:''}
  buttonpressed=bvalue=>{
    if(bvalue==="=")
    {
      try{ this.setState({ equation:eval(this.state.equation) }) }
      catch(e) { this.setState({ equation:'error'}) }
      
    }
    else if(bvalue==="CE")
    {
      this.setState({equation:''})
    }
    else{
      this.setState({
        equation:this.state.equation+bvalue
      })
    }
    
  }
  render()
  {
    return(<div>
      <DisplayCard result={this.state.equation} />
      <Buttons buttonpressed={this.buttonpressed}></Buttons>
    </div>)
  }
}

export default App;