import React, {Component, Fragment} from 'react'
import FavoritesContainer from './FavoritesContainer'

class FavoritesBody extends Component{

  render(){
    return(<>
     <FavoritesContainer myFavorites={this.props.myFavorites}
     onClick={this.props.handleCardClick}
     handleBtn={this.props.handleBtn}/>
      </>
    )
  }
}

export default FavoritesBody
