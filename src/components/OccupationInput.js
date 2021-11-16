import React from 'react'
import { connect } from 'react-redux'
import { addOccupation } from '../actions/addOccupation'
// import { Link } from 'react-router-dom'

class OccupationInput extends React.Component {

  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addOccupation(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        <strong>Add an NPC Occupation/Role!</strong>
        <p>What is your NPC's role in the world? Are they a king? Or a beggar? Or perhaps the BBEG's right-hand-man?</p>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
          <input type="submit" />
        </form>
      </div>
    )
  }

}

export default connect(null, {addOccupation})(OccupationInput)
