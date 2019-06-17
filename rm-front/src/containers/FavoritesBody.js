import React, {Component} from 'react'
import FavoritesContainer from './FavoritesContainer'

export default class FavoritesBody extends Component{
  render(){
    return(
      <div>
      <FavoritesContainer
      myFavorites={this.props.myFavorites}
      handleCardClick={this.props.handleCardClick}
      />
      </div>
    )
  }
}
