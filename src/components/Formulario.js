import { useState } from "react";

function Formulario({ crearTarea }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setdescripcion] = useState("");

  const EnviarForm = (e) => {
    e.preventDefault();

    crearTarea({
      titulo,
      descripcion,
    });

    setTitulo("");
    setdescripcion("");
  };

  return (
    <form onSubmit={EnviarForm}>
      <input
        placeholder="Añadir Tarea"
        onChange={(e) => setTitulo(e.target.value)}
        value={titulo}
        autoFocus
      />
      <textarea
        placeholder="Descripcion de la tarea"
        onChange={(e) => setdescripcion(e.target.value)}
        value={descripcion}
      ></textarea>
      <button> Agregar </button>
    </form>
  );
}

export default Formulario;
