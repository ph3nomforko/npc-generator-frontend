import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addOccupation } from '../actions/addOccupation'

class OccupationInput extends React.Component {

  state = {
    name: '',
    redirect: null
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
      redirect: "/occupations"
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="container">
        <h5 style={{textAlign:'center'}}>Add an NPC Occupation/Role!</h5>
        <p style={{textAlign:'center'}}>What is your NPC's role in the world? Are they a king? Or a beggar? Or perhaps the BBEG's right-hand-man?</p>
        <form className="container center-align" onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
          <button className="btn waves-effect waves-light green" type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }

}

export default connect(null, {addOccupation})(OccupationInput)
