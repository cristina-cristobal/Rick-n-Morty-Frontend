import React, {Component} from 'react'
import CharacterCard from '../components/CharacterCard'

class CharacterContainer extends Component {

  render(){
    // debugger
    return(
      <div className='ui five column grid'>
        <div className='row'>
            {this.props.allCharacters.map(characterObj =>
              <CharacterCard key={characterObj.id} character={characterObj}
                backview={this.props.backview}
                myFavorites={this.props.myFavorites}
                handleBtn={this.props.handleBtn}/>)}
        </div>
      </div>
    )
  }
}

export default CharacterContainer
