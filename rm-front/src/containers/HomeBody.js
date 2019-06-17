import React, {Component} from 'react'
import CharacterContainer from './CharacterContainer'

class HomeBody extends Component {
  render(){
    return(
      <div>
        <p>Character Container</p>
        <CharacterContainer allCharacters={this.props.allCharacters}
        handleCardClick={this.props.handleCardClick}
        />
      </div>
    )
  }
}

export default HomeBody
