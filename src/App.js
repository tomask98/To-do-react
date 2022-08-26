import  Formulario  from "./components/Formulario";
import  Lista  from "./components/Lista";
import { tareas as datos } from "./Data/Tareas";
import { useEffect, useState } from "react";

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
      <Formulario crearTarea={crearTarea} />
      <Lista tareas={tareas} EliminarTarea={EliminarTarea} />
    </>
  );
}

export default App;
