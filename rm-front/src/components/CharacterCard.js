import React, {Component} from 'react'

class CharacterCard extends Component{
  constructor(){
    super()

    this.state = {
      backview: false
    }
  }

  handleCardClick = () => {
    this.setState({
      backview: !this.state.backview
    })
  }

  render(){
    //when clicked, we want to set the state of backview to the opposite of what it already is. if set to false, then show image/name. if not. then show the stats and add button.

    //this situation is the perfect opportunity to use a ternary in the return. The first part of the ternary always evaluates to true. To switch the value of backview (state) to the to the opposite of what it already is, just put a bang in front of the name of state. ex: !backview

      return(
        <div className='ui column'>
          {!this.state.backview ?
          <div className='ui card' onClick={() => this.handleCardClick(this.props.character)}>
              <img alt='o no!' src={this.props.character.image}/>
            <div className="content">
              <div className="header">{this.props.character.name}
            </div>
            </div>
          </div>
          :
          <div className='ui card' onClick={this.props.handleCardClick}>
            <div className="content">
              <div className="header">{this.props.character.name}
              <div className="description">--{this.props.character.gender}--</div>
                <div className="description">Status: {this.props.character.status}</div>
                <div className="description">Species: {this.props.character.species}</div>
              </div>
            </div>
            <button className='ui primary button'
              onClick={() => {this.props.handleBtn(this.props.character)}}> {this.props.myFavorites.includes(this.props.character)? 'Remove' : 'Add'}
            </button>
          </div>}

        </div>
      )}
}

export default CharacterCard
