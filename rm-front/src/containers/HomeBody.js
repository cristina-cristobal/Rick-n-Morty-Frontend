import React, {Component} from 'react'
import CharacterContainer from './CharacterContainer'

class HomeBody extends Component {
  render(){
    return(
      <div>
        <CharacterContainer allCharacters={this.props.allCharacters}
        handleCardClick={this.props.handleCardClick}
        addToSelected={this.props.addToSelected}
        selectedCharacters={this.props.selectedCharacters}
        characters={this.props.characters}
        removeSelected={this.props.removeSelected}
        favorites={this.props.favorites}
        handleFavorite={this.props.handleFavorite}
        />
      </div>
    )
  }
}

export default HomeBody
