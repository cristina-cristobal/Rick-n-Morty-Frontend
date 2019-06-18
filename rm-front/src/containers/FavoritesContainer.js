import React, {Component} from 'react'
import CharacterCard from '../components/CharacterCard'

export default class FavoritesContainer extends Component {
  render(){
    return(
      <div className='ui five column grid'>
        <div className='row'>
        {this.props.favorites.map(characterObj =>
          <CharacterCard
          key={characterObj.id}
          character={characterObj}
          id={characterObj.id}
          handleCardClick={this.props.handleCardClick}
          addToSelected={this.props.addToSelected}
          selectedCharacters={this.props.selectedCharacters}
          characters={this.props.characters}
          removeSelected={this.props.removeSelected}
          favorites={this.props.favorites}
          />)}
        </div>
      </div>
    )
  }
}
