import React from 'react';
import { connect } from 'react-redux';
import fetchOccupations from './actions/fetchOccupations'

class App extends React.Component {

  render () {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     occupations: state.occupations
//   }
// }

export default connect()(App);
