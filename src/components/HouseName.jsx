import { useHouse } from "../hooks/useHouse";

export function HouseName({ houseId }) {

    const {house} = useHouse(houseId);

    if (!house) return null

    return (
        <h1>{ house.name }</h1>
    )
  }
  
  