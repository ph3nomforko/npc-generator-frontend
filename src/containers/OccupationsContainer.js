import React from 'react'
import { connect } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
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
          <Routes>
            <Route path='/occupations/new' element={<OccupationInput />} />
            <Route path='/occupations' element={<Occupations occupations={this.props.occupations} />} />
          </Routes>
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
