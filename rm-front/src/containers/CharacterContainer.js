import React from 'react'
import { Card } from 'semantic-ui-react'
import CharacterCard from '../components/CharacterCard'

const CharacterContainer = ({allCharacters}) => {
  // debugger
    return(
      <Card.Group itemsPerRow={4} allcharacters={allCharacters}>
        {allCharacters.map((character) => (
          <CharacterCard character={character} key={character.id}/>
          ))
        }
      </Card.Group>
    )
  }

export default CharacterContainer
