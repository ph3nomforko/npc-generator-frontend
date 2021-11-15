import React from 'react';

export default class OccupationInput extends React.Component {

  state = {
    name: ''
  }

  render() {
    return (
      <div>
        <strong>Add an NPC Occupation/Role!</strong>
        <form>
          <label>Name: </label>
          <input type="text" placeholder="Name" value={this.state.name}/><br/>
          <input type="submit" />
        </form>
      </div>
    )
  }
  
}
