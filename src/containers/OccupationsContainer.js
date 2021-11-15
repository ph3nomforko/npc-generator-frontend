import React from 'react';
import Occupations from '../components/Occupations'
import OccupationsInput from '../components/OccupationsInput'

export default class OccupationsContainer extends React.Component {
  render() {
    return (
        <div>
          <h2>OccupationsContainer</h2>
          <Occupations />
          <OccupationsInput />
        </div>
    )
  }
}
