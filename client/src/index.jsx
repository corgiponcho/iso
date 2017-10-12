require('./index.less')
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="module-container">
        hello
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
