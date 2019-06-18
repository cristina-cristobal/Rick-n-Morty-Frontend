import React, {Component, Fragment} from 'react'
import CharacterCard from '../components/CharacterCard'

class FavoritesContainer extends Component{
  //fragments are these guys: <> </>
  //when you import Fragment as another argument with Component, they save you the headache

  render(){
    return(
      <>
      <p>This is the FavoritesContainer.</p>
      {this.props.myFavorites.map(character => {
            return <CharacterCard character={character} key={character.id} onClick={this.props.handleCardClick}
            handleBtn={this.props.handleBtn}
            myFavorites={this.props.myFavorites}/>})
        }
      </>
    )
  }
}

export default FavoritesContainer
