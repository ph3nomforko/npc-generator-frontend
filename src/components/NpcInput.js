import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addNpc } from '../actions/addNpc'
import { getRandomFromArray, random_npcs } from '../data/npcGenerateInfo'

class NpcInput extends React.Component {

  state = {
    name: '',
    species: '',
    npc_class: '',
    alignment: '',
    appearance: '',
    strong_ability: '',
    weak_ability: '',
    behavior: '',
    plot_key: '',
    redirect: null
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
      redirect: `/occupations/${this.props.occupation.id}/npcs`
    })
  }

  handleRandom = event => {
    let randomized_npc = getRandomFromArray(random_npcs)
    this.setState({
      name: randomized_npc.name,
      species: randomized_npc.species,
      npc_class: randomized_npc.npc_class,
      alignment: randomized_npc.alignment,
      appearance: randomized_npc.appearance,
      strong_ability: randomized_npc.strong_ability,
      weak_ability: randomized_npc.weak_ability,
      behavior: randomized_npc.behavior,
      plot_key: randomized_npc.plot_key,
      redirect: null
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return(
      <div className="container center-align">
        <h5 style={{textAlign:"center"}}>Add a new {this.props.occupation.name}</h5>
        <p style={{textAlign:'center'}}>Give your NPC some initial information that will let them be realized in your game. Or generate a random one!</p>
        <button className="btn orange darken-4" onClick={this.handleRandom}>Generate Random NPC</button>
        <form className="center-align" onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
          <label>Race: </label>
          <input type="text" placeholder="Race" name="species" value={this.state.species} onChange={this.handleChange}/><br/>
          <label>Class: </label>
          <input type="text" placeholder="Class" name="class" value={this.state.npc_class} onChange={this.handleChange}/><br/>
          <label>Alignment: </label>
          <input type="text" placeholder="Alignment" name="alignment" value={this.state.alignment} onChange={this.handleChange}/><br/>
          <label>Appearance: </label>
          <input type="text" placeholder="Appearance" name="appearance" value={this.state.appearance} onChange={this.handleChange}/><br/>
          <label>Strong Ability: </label>
          <input type="text" placeholder="Strong Ability" name="strong_ability" value={this.state.strong_ability} onChange={this.handleChange}/><br/>
          <label>Weak Ability: </label>
          <input type="text" placeholder="Weak Ability" name="weak_ability" value={this.state.weak_ability} onChange={this.handleChange}/><br/>
          <label>Behavior: </label>
          <input type="text" placeholder="Behavior" name="behavior" value={this.state.behavior} onChange={this.handleChange}/><br/>
          <label>Plot Key: </label>
          <input type="text" placeholder="Plot Key" name="plot_key" value={this.state.plot_key} onChange={this.handleChange}/><br/>
          <button className="btn waves-effect waves-light green" type="submit">Submit</button>
        </form>
      </div>
    )
  }

}

export default connect(null, {addNpc})(NpcInput)
