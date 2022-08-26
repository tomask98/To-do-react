import CardTareas from "./CardTareas";


function Lista({tareas, EliminarTarea}) {


  if (tareas.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  return (
    <div>
      {tareas.map((tarea) => (
        <CardTareas key={tarea.id} tarea= {tarea}  EliminarTarea={EliminarTarea} />
      ))}
    </div>
  );
}

export default Lista