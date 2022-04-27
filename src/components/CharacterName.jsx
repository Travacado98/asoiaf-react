import { useCharacter } from "../hooks/useCharacter"

export function CharacterName({ charId }) {

    const {character} = useCharacter(charId);

    if (!character) return null

    return (
        <h1>{ character.name }</h1>
    )
  }
  
  