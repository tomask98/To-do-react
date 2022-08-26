function CardTareas({ tarea,EliminarTarea }) {

  
  return (
    <div>
      <h1>{tarea.titulo}</h1>
      <p>{tarea.descripcion}</p>
      <button onClick={() => EliminarTarea(tarea.id)}>
        Eliminar tarea
      </button>
    </div>
  );
}

export default CardTareas;
