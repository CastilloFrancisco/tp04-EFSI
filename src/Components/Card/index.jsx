import axios from "axios";
import { useEffect, useState } from "react";
import './card.css';
import Datos from "../Datos";

export default function Card({ nom }) {
    const [datos, setDatos] = useState(null);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const res = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/bulbasaur` //front_default:
                );
                setDatos(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        obtenerDatos();
    }, [nombre]);

    let tipos = datos.types[0].type.name + ", " + datos.types[1].type.name

    if (!datos) return <p>Cargando...</p>;
    return (
        <>
        <img src={datos.sprites.front_default} alt="" />
            <Datos
                nombre={datos.species.name}
                peso={datos.weight}
                tamaño={datos.height}
                tipos={tipos}>
            </Datos>
        </>
    )
}

