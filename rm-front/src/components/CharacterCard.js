import React from 'react'

const CharacterCard = (props) => {
  let {character: {image, name, id}} = props
  return(
    <div className='ui column' onClick={() => {props.handleCardClick(props.character)}
  }>
      <div className='ui card'>
        <img alt='o no!' src={image}/>
        <div className="content">
        <div className="header">{name}
        </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
