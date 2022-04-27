import { Link } from "react-router-dom";
import { CharacterName } from "./CharacterName";

export function CharacterList({ book }) {
  return (
    <div>
      {book.povCharacters.map((character, i) => {
        const charId = character.split('/').slice(-1)[0]
        return (
          <Link key={i} to={`/character/${charId}`}>
            <CharacterName charId={charId}/>
          </Link>
        )
      })}
    </div>
  )
}

