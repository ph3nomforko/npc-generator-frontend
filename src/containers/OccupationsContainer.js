import React from 'react'
import { connect } from 'react-redux'
import { fetchOccupations } from '../actions/fetchOccupations'

import Occupations from '../components/Occupations'
import OccupationInput from '../components/OccupationInput'

class OccupationsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchOccupations()
  }

  render() {
    return (
        <div>
          <h3>OccupationsContainer</h3>
          <OccupationInput /><br/><br/>
          <Occupations occupations={this.props.occupations}/>

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
