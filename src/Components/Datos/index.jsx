import axios from "axios";
import { useEffect, useState } from "react";

export default function Datos({ nombre, peso, tamaño, tipos}) {

  if (!nombre || nombre || peso || tamaño || tipo1) return <p>Cargando...</p>;
    return (
    <>
      <Estadistica>{nombre}</Estadistica>
      <Estadistica texto={ tipos }/>
      <Estadistica texto={ peso }/>
      <Estadistica texto={ tamaño }/>
    </>
  )
}

