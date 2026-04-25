import Estadistica from "../Estadistica";
import "./datos.css";

export default function Datos({ peso, tamaño, tipos }) {

  if (!peso || !tamaño || !tipos) {
    return <p>Cargando...</p>;
  }

  return (
    <>
   
      <Estadistica texto={`Tipo: ${tipos}`} />
      <Estadistica texto={`Peso: ${peso} libras`} />
      <Estadistica texto={`Altura: ${tamaño} pies (creo)`} />
    </>
  );
}