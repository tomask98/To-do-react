import { createContext, useState, useEffect } from "react";
import { tareas as datos } from "../Data/Tareas";

export const TaskContext = createContext();

export function TaskContextprovider(props) {
  const [tareas, setTareas] = useState([]);

  function crearTarea(tarea) {
    setTareas([
      ...tareas,
      {
        titulo: tarea.titulo,
        id: tareas.length,
        descripcion: tarea.descripcion,
      },
    ]);
  }
  function EliminarTarea(idTarea) {
    setTareas(tareas.filter((tarea) => tarea.id !== idTarea));
  }

  useEffect(() => {
    setTareas(datos);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tareas,
        crearTarea,
        EliminarTarea,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
