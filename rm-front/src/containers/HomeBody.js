import React, {Component} from 'react'
import CharacterContainer from './CharacterContainer'

class HomeBody extends Component {
  render(){
    // debugger
    return(
      <div>
        <p>Character Container</p>
        <CharacterContainer allCharacters={this.props.allCharacters}
          backview={this.props.backview}
          handleBtn={this.props.handleBtn}
          myFavorites={this.props.myFavorites}/>
      </div>
    )
  }
}

export default HomeBody
