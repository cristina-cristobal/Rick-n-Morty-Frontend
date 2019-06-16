import React from 'react'
import { Card } from 'semantic-ui-react'

const CharacterCard = ({character}) => (
    <Card color='blue' src={character.image} />
)

export default CharacterCard
