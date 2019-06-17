import React, {Component} from 'react'
import CharacterCard from '../components/CharacterCard'

export default class CharacterContainer extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    debugger
    return(
      <div className='ui five column grid'>
        <div className='row'>
            {this.props.allCharacters.map(characterObj =>
              <CharacterCard key={characterObj.id} character={characterObj}/>)}
        </div>
      </div>
    )
  }
}
