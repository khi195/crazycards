import React, { Component, Fragment } from 'react';
import Form from '../src/pages/Form';
import Results from '../src/pages/Results';

class App extends Component {
  
  state = {
    data:[]
  }


  Result = data => {
    this.setState(()=>({data}))
  }

  render() {
    const {data} = this.state
    return (
      <Fragment>
          { data.length === 0 
          ?
            <Form callback={this.Result}/>
          :
            <Results Results={this.state.data}/>
          }
          
      </Fragment>
    );
  }
}

export default App;
