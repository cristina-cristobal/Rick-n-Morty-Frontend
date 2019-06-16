import React, {Component} from 'react'
import CharacterContainer from './CharacterContainer'

class HomeBody extends Component {
  render(){
    // debugger
    return(
      <div>
        <p>Character Container</p>
        <CharacterContainer  allCharacters={this.props.allCharacters}/>
      </div>
    )
  }
}

export default HomeBody
