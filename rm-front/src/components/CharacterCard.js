import React from 'react'

const CharacterCard = (props) => {
  console.log(props)
  return(
    <div className='ui column'>
      <div className='ui card'>
        <img alt='o no!' src={props.character.image}/>
        <div class="content">
        <div class="header">{props.character.name}
        </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
