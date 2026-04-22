import axios from "axios";
import { useEffect, useState } from "react";
import './datos.css';

export default function Datos({ nombre }) {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${nombre}`
        );
        setDatos(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerDatos();
  }, [nombre]);

  if (!datos) return <p>Cargando...</p>;
    return (
    <>
      <Estadistica>{nombre}</Estadistica>
      <Estadistica texto={obtenerDatos(nombre).weight}/>
      <Estadistica texto={obtenerDatos(nombre).size}/>
      <Estadistica texto={obtenerDatos(nombre).types}/>

    </>
  )
}

