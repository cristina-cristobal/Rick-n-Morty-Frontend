import React from 'react'

const CharacterCard = (props) => {
  console.log(props)
  return(
    <div className='ui column'>
      <div className='ui card'>
        <img alt='o no!' src={props.character.image}/>
        
      </div>
    </div>
  )
}

export default CharacterCard
