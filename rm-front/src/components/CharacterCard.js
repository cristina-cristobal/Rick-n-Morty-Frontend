import React from 'react'
import { Card } from 'semantic-ui-react'

const CharacterCard = (props) => {
  console.log(props)
  return(
    <div color='blue'>
    Character Name: {props.character.name}
    <div>
    Character Status: {props.character.status}
    </div>
    </div>
  )
}
//
export default CharacterCard
