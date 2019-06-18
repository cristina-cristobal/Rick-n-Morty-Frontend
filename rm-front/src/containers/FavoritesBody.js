import React, {Component} from 'react'
import FavoritesContainer from './FavoritesContainer'

export default class FavoritesBody extends Component{
  render(){
    return(
      <div>
      <FavoritesContainer
      favorites={this.props.favorites}
      handleCardClick={this.props.handleCardClick}
      addToSelected={this.props.addToSelected}
      selectedCharacters={this.props.selectedCharacters}
      characters={this.props.characters}
      removeSelected={this.props.removeSelected}
      />
      </div>
    )
  }
}
