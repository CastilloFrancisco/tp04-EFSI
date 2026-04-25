
# Proyecto Pokémon

Aplicación React creada con Vite para buscar, filtrar y mostrar Pokémon usando la API pública de PokéAPI.

## Funcionalidades

- Buscar Pokémon por nombre o ID.
- Cargar una lista de Pokémon.
- Filtrar por tipo de Pokémon.
- Mostrar detalles como nombre, imagen, tipo, peso y altura.
- Manejo básico de errores cuando no se encuentra un Pokémon o hay un problema de carga.

## Tecnologías

- React 19
- Vite
- JavaScript moderno
- CSS para estilos
- Fetch API para consumir la PokéAPI

## Instalación

1. Clonar este repositorio.
2. Abrir la carpeta del proyecto.
3. Instalar dependencias:

```bash
npm install
```

## Ejecución

- Iniciar el servidor de desarrollo:

```bash
npm run dev
```

- Construir para producción:

```bash
npm run build
```

- Vista previa de la build:

```bash
npm run preview
```

## Estructura principal

- `src/App.jsx`: Componente principal y lógica de búsqueda, carga y filtrado.
- `src/Components/Buscador`: Formulario de búsqueda por nombre o ID.
- `src/Components/Filtros`: Selector para filtrar por tipo.
- `src/Components/ListaPokemon`: Renderiza la lista de resultados.
- `src/Components/Card`: Muestra el detalle de cada Pokémon.
- `src/Components/Datos`: Presenta peso, altura y tipos.
- `src/Components/Error`: Mensajes de error.

## Uso

1. Escribir un nombre o ID de Pokémon en el buscador y pulsar "Buscar".
2. Presionar "Cargar la lista" para obtener los primeros 12 Pokémon.
3. Seleccionar un tipo en el filtro para ver Pokémon de ese tipo.

## Notas

- La aplicación usa la API pública de PokéAPI: https://pokeapi.co/
- Algunas traducciones son informales y están en español.
