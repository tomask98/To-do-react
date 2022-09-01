import { useState } from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { borderColor } from "@mui/system";

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
      <Stack
        direction="row"
        spacing={3}
        sx={{
          justifyContent: "center",
        }}
      >
        <TextField
          variant="standard"
          color="success"
          placeholder="Añadir Tarea"
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
          autoFocus
          autoComplete="off"
        />

        <TextField
          variant="standard"
          color="success"
          placeholder="Descripcion de la tarea"
          onChange={(e) => setdescripcion(e.target.value)}
          value={descripcion}
        />

        <button
          style={{
            background: "none",
            border: "2px solid green",
            borderRadius: "20px"
          }}
        >
        
          Agregar Tarea
        </button>
      </Stack>
    </form>
  );
}

export default Formulario;
