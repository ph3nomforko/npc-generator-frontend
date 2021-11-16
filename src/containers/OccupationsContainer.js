import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchOccupations } from '../actions/fetchOccupations'

import Occupations from '../components/Occupations'
import OccupationInput from '../components/OccupationInput'
// import Occupation from '../components/Occupation'

class OccupationsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchOccupations()
  }

  render() {
    return (
        <div>
          <Route path="/occupations/new" component={OccupationInput} />
          <Route exact path="/occupations" render={() => <Occupations occupations={this.props.occupations} />} />
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    occupations: state.occupations
  }
}

export default connect(mapStateToProps, {fetchOccupations})(OccupationsContainer)
