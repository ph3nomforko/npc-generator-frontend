import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { fetchOccupations } from '../actions/fetchOccupations'

import Occupations from '../components/Occupations'
import OccupationInput from '../components/OccupationInput'
import Occupation from '../components/Occupation'
import NavBar from '../components/NavBar'

class OccupationsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchOccupations()
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/occupations/new' component={OccupationInput} />
          <Route path='/occupations/:id' render={(routerProps) => <Occupation {...routerProps} occupations={this.props.occupations} />} />
          <Route exact path='/occupations' render={(routerProps) => <Occupations {...routerProps} occupations={this.props.occupations} />} />
        </Switch>
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
