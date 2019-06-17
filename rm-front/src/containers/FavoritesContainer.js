import React, {Component} from 'react'
import CharacterCard from '../components/CharacterCard'

export default class FavoritesContainer extends Component {
  render(){
    return(
      <div className='ui five column grid'>
        <div className='row'>
        {this.props.myFavorites.map(characterObj =>
          <CharacterCard
          key={characterObj.id}
          character={characterObj}
          id={characterObj.id}
          handleCardClick={this.props.handleCardClick}
          />)}
        </div>
      </div>
    )
  }
}
