import React, {Component} from 'react'
import CharacterContainer from './CharacterContainer'

class HomeBody extends Component {
  render(){
    return(
      <div>
        <p>Character Container</p>
        <CharacterContainer allCharacters={this.props.allCharacters}
        handleCardClick={this.props.handleCardClick}
        addToSelected={this.props.addToSelected}
        selectedCharacters={this.props.selectedCharacters}
        characters={this.props.characters}
        />
      </div>
    )
  }
}

export default HomeBody
