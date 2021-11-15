import React from 'react';
// import { connect } from 'react-redux';
// import fetchOccupations from './actions/fetchOccupations'
import OccupationsContainer from './containers/OccupationsContainer';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <OccupationsContainer />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     occupations: state.occupations
//   }
// }

export default App;
