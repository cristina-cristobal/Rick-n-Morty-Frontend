import React, {Component} from 'react'
import CharacterCard from '../components/CharacterCard'

export default class CharacterContainer extends Component {
  render(){
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

// <div className="ui four column grid">
//     		<div className="row">
//     		  {this.props.bots.map(botObj =>
//             <BotCard
//             bot={botObj}
//             key={botObj.id}
//             addToArmy={this.props.addToArmy}
//             />)}
//     		  Collection of all bots
//     		</div>
//   	  </div>
