import './datos.css'

export default function Estadistica({ nombre }) {
  return (
    <>
      <Estadistica>{nombre}</Estadistica>
      <Estadistica texto={obtenerDatos(nombre).weight}/>
      <Estadistica texto={obtenerDatos(nombre).size}/>
      <Estadistica texto={obtenerDatos(nombre).types}/>

    </>
  )
}
app.get('https://pokeapi.co/api/v2/pokemon/:nom', (req, res) => {            

    let strNombre = req.params.nom
   
    return res.send(`Hola ${strNombre}👋`);
})