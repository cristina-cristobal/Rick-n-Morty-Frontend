import React from 'react'

const CharacterCard = (props) => {
  let {character: {image, name}} = props
  console.log(props.character)
  return(
    <div>

    {
      !props.selectedCharacters.includes(props.character) ?

    <div className='ui column'
    onClick={() => {props.addToSelected(props.character)}}
    onDoubleClick={() => {props.handleCardClick(props.character)}}>
      <div className='ui card'>
        <img alt='o no!' src={image}/>
        <div className="content">
        <div className="header">{name}
        </div>
        </div>
      </div>
    </div>

    :

    <div>
    Fill me!
    </div>


  }

</div>

  )
}

export default CharacterCard


// getAllCharacters = () => {
//   return this.state.allCharacters.filter(character => !this.state.myFavorites.includes(character))
// }
