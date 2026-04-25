import "./App.css";
import { useState } from "react";

import Buscador from "./Components/Buscador";
import Filtros from "./Components/Filtros";
import ListaPokemon from "./Components/ListaPokemon";
import Error from "./Components/Error";

function App() {
  const [lista, setLista] = useState([]);
  const [error, setError] = useState("");

  const buscarPokemon = async (valor) => {
    if (!valor) {
      setError("Ingresá un nombre o ID");
      return;
    }

    try {
      setError("");

      const resultado = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`);

      if (!resultado.ok) throw new Error("No existe");

      const data = await resultado.json();

      setLista([data]);
      console.log(data);
    } catch (err) {
      setError("El Pokémon no existe");
      setLista([]);
    }
  };

  const obtenerLista = async () => {
    try {
      const resultado = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      const data = await resultado.json();

      const detalles = await Promise.all(
        data.results.map(async (p) => {
          try {
            const resultado = await fetch(p.url);
            if (!resultado.ok) return null;
            return await resultado.json();
          } catch {
            return null;
          }
        })
      );


      setLista(detalles.filter(p => p));
    } catch {
      setError("Error cargando lista");
    }
  };

  const filtrarPorTipo = async (tipo) => {
    if (!tipo) return;

    try {
      const resultado = await fetch(
        `https://pokeapi.co/api/v2/type/${tipo}`
      );
      const data = await resultado.json();

      const pokemons = data.pokemon.slice(0, 10);

      const detalles = await Promise.all(
        pokemons.map(async (p) => {
          const resultado = await fetch(p.pokemon.url);
          return await resultado.json();
        })
      );

      setLista(detalles);
    } catch {
      setError("Error al filtrar");
    }
  };

  return (
    <div className="app">

      <div className="contenedor">
        <Buscador buscarPokemon={buscarPokemon} />
        <Filtros filtrarPorTipo={filtrarPorTipo} />

        <button onClick={obtenerLista}>Cargar lista 'Primeros 10'</button>

        {error && <Error mensaje={error} />}

        <ListaPokemon lista={lista} />
      </div>
    </div>
  );
}

export default App;