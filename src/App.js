import React from 'react';

class App extends React.Component {

  componentDidMount() {
    fetch('http://[::1]:3000/api/v1/occupations')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render () {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;
