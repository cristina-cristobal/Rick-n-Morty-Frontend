import React from 'react'

const CharacterCard = (props) => {
  let {character: {image, name, species, gender, status, origin, current_location}} = props
  return(
    <div>

    {
      !props.selectedCharacters.includes(props.character) ?

    <div className='ui column'
    onClick={() => {props.addToSelected(props.character)}}>
      <div className='ui card'>
        <img alt='o no!' src={image}/>
        <div className="content">
        <div className="header">{name}
        </div>
        </div>
      </div>
    </div>

    :

    <div className='ui column' onClick={() => {props.removeSelected(props.character)}}
    onDoubleClick={() => {props.handleCardClick(props.character)}}>
    <div className='ui card'>
      <img alt='o no!' src={image}/>
      <div className="content">
      <div className="header">Name: {name}
      <div>
      Status: {status}
      </div>
      <div>
      Species: {species}
      </div>
      <div>
      Gender: {gender}
      </div>
      <div>
      Origin: {origin}
      </div>
      <div>
      Current Location: {current_location}
      </div>
      </div>
      </div>
    </div>
  </div>


  }

</div>

  )
}

export default CharacterCard


// getAllCharacters = () => {
//   return this.state.allCharacters.filter(character => !this.state.myFavorites.includes(character))
// }
