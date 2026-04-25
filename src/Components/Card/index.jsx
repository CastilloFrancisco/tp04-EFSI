import "./card.css";
import Datos from "../Datos";

const Card = ({ pokemon }) => {
  if (!pokemon) return null;

  const tipoPrincipal = pokemon.types?.[0]?.type.name;

  return (
    <div className={`Card type-${tipoPrincipal}`}>
      <h3>{pokemon.name}</h3>

      <img src={pokemon.sprites?.front_default} alt={pokemon.name} />

      <Datos
        nombre={pokemon.name}
        peso={pokemon.weight}
        tamaño={pokemon.height}
        tipos={pokemon.types?.map((t) => t.type.name).join(", ")}
      />
    </div>
  );
};

export default Card;