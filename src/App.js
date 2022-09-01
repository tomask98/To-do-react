import  Formulario  from "./components/Formulario";
import  Lista  from "./components/Lista";
import { tareas as datos } from "./Data/Tareas";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    setTareas(datos);
  }, []);

  function crearTarea(tarea) {
    setTareas([...tareas, {
        titulo: tarea.titulo,
        id: tareas.length,
        descripcion: tarea.descripcion
    }])
  }
  function EliminarTarea(idTarea) {
    setTareas(tareas.filter(tarea => tarea.id !== idTarea))
    
  }
  return (
    <>
    <Box sx={{width: '100%',
      alignContent: "center",
      bgcolor: '#fafafa',
      border: "2px solid white",
      borderRadius:"20px",
      flexDirection: "center"}}>
      <Formulario crearTarea={crearTarea} />
      <Lista tareas={tareas} EliminarTarea={EliminarTarea} />
      </Box>
    </>
  );
}

export default App;
