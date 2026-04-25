import "./filtros.css";

const Filtros = ({ filtrarPorTipo }) => {
    return (
        <div className="filtros">
            <select onChange={(e) => filtrarPorTipo(e.target.value)}>
                <option value="">Filtrar por tipo</option>
                <option value="normal">Normal</option>
                <option value="fire">Fuego</option>
                <option value="water">Agua</option>
                <option value="electric">Eléctrico</option>
                <option value="grass">Planta</option>
                <option value="ice">Hielo</option>
                <option value="fighting">Lucha</option>
                <option value="poison">Veneno</option>
                <option value="ground">Tierra</option>
                <option value="flying">Volador</option>
                <option value="psychic">Psíquico</option>
                <option value="bug">Bicho</option>
                <option value="rock">Roca</option>
                <option value="ghost">Fantasma</option>
                <option value="dragon">Dragón</option>
                <option value="dark">Siniestro</option>
                <option value="steel">Acero</option>
                <option value="fairy">Hada</option>
            </select>
        </div>
    );
};

export default Filtros;