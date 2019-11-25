import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props); 
    
    this.state = {
      backgroundColor: 0xFFC0CB, 
    };

    this.randomColor = this.randomColor.bind(this);
  }


  randomColor() {
    return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  }

  changeColor() {
    this.setState({backgroundColor: this.randomColor});
  }

  render() {     

    return (
        <div className="Container">
        
        <div className="Square" onMouseOver={this.changeColor} style={{backgroundColor: this.state.backgroundColor}}></div>
        <div className="Square" onMouseOver="changeColor"></div>
        <div className="Square" onMouseOver="changeColor"></div>
        <div className="Square" onMouseOver="changeColor"></div>
        <div className="Square" onMouseOver="changeColor"></div>
        <div className="Square" onMouseOver="changeColor"></div>
        <div className="Square" onMouseOver="changeColor"></div>
        <div className="Square" onMouseOver="changeColor"></div>
        <div className="Square" onMouseOver="changeColor"></div>
        
        </div>
    );
  }
}



export default App;
