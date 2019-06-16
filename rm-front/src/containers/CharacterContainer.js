import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import CharacterCard from '../components/CharacterCard'

export default class CharacterContainer extends Component {
  render(){
    return(
      <div>
        {this.props.allCharacters.map(characterObj => <CharacterCard key={characterObj.id} character={characterObj}/>)}
      </div>
    )
  }
}
