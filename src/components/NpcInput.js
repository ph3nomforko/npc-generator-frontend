import React from 'react'
import { connect } from 'react-redux'
import { addNpc } from '../actions/addNpc'

class NpcInput extends React.Component {

  state = {
    name: '',
    species: '',
    alignment: '',
    appearance: '',
    strong_ability: 'Strength',
    weak_ability: 'Dexterity',
    behavior: '',
    plot_key: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addNpc(this.state, this.props.occupation.id)
    this.setState({
      name: '',
      species: '',
      alignment: '',
      appearance: '',
      strong_ability: '',
      weak_ability: '',
      behavior: '',
      plot_key: ''
    })
  }

  render() {
    return(
      <div>
        <strong>Add an NPC</strong>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
          <label>Race: </label>
          <input type="text" placeholder="Race" name="species" value={this.state.species} onChange={this.handleChange}/><br/>
          <label>Alignment: </label>
          <input type="text" placeholder="Alignment" name="alignment" value={this.state.alignment} onChange={this.handleChange}/><br/>
          <label>Appearance: </label>
          <input type="text" placeholder="Appearance" name="appearance" value={this.state.appearance} onChange={this.handleChange}/><br/>
          <label>Strong Ability: </label>
          <select name="strong_ability" value={this.state.strong_ability} onChange={this.handleChange}>
            <option>Strength</option>
            <option>Dexterity</option>
            <option>Constitution</option>
            <option>Intelligence</option>
            <option>Wisdom</option>
            <option>Charisma</option>
          </select>
          <br/><label>Weak Ability: </label>
          <select name="weak_ability" value={this.state.weak_ability} onChange={this.handleChange}>
            <option>Dexterity</option>
            <option>Strength</option>
            <option>Constitution</option>
            <option>Intelligence</option>
            <option>Wisdom</option>
            <option>Charisma</option>
          </select>
          <br/><label>Behavior: </label>
          <input type="text" placeholder="Behavior" name="behavior" value={this.state.behavior} onChange={this.handleChange}/><br/>
          <label>Plot Key: </label>
          <input type="text" placeholder="Plot Key" name="plot_key" value={this.state.plot_key} onChange={this.handleChange}/><br/>
          <input type="submit" />
        </form>
      </div>
    )
  }

}

export default connect(null, {addNpc})(NpcInput)
