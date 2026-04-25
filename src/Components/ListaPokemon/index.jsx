import "./lista.css";
import Card from "../Card";

const ListaPokemon = ({ lista }) => {

  if (!lista || lista.length === 0) {
    return <p>No hay Pokémon para mostrar</p>;
  }

  return (
    <div className="lista">
      {lista
        .filter(pokemon => pokemon && pokemon.id) 
        .map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
    </div>
  );
};

export default ListaPokemon;