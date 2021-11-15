import React from 'react';
import Occupations from '../components/Occupations'
import OccupationInput from '../components/OccupationInput'

export default class OccupationsContainer extends React.Component {
  render() {
    return (
        <div>
          <h2>OccupationsContainer</h2>
          <Occupations />
          <OccupationInput />
        </div>
    )
  }
}
