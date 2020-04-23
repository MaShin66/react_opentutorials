import React, { Component } from 'react';
import Search from './Components/Search';

class App3 extends Component {
  constructor(props){
    super(props);
    this.state = {
        group: [
          {name: 'Good', number: 1},
          {name: 'Best', number: 2}
        ]
        
    }
    
  }

  

  render(){
    return(
        <div>
          <p>Test</p>
          <p>
            
          </p>
          <Search group={this.state.group}></Search>
            
        </div>
      );
   }
  }

export default App3;