import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
// import img from "../../components/rick-and-morty-dance.gif"

export default function Detail() {

    const { detailId } = useParams()

    const [character, setCharacter] = useState({})

    useEffect(() => {

        const URL_BASE = "https://be-a-rym.up.railway.app/api"
        const KEY = "208915502015.5ad33e85904a79bab279"

        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`)
            .then((response) => setCharacter(response.data))
    }, [])

    return (

        < div >
            {
                character.name ?
                    (<>
                        <h2>{character.name}</h2>
                        <p>{character.status}</p>
                        <p>{character.species}</p>
                        <p>{character.gender}</p>
                        <p>{character.origin?.name}</p>
                        <img src={character.image} alt="imagen tarjetas" />
                    </>) : (
                        // <img src={img} alt="" />
                    )

            }

        </div>

    )
}
