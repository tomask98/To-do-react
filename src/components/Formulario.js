import { useContext, useState } from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import AddComment from "@mui/icons-material/AddComment";
import { TaskContext } from "../context/taskcontext";


function Formulario() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const {crearTarea} = useContext(TaskContext)

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
    <form onSubmit  ={EnviarForm }>
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

        <Button
        onClick={EnviarForm}
        variant="contained"
        startIcon={<AddComment />}>
          Agregar Tarea
        </Button>
      </Stack>
    </form>
  );
}

export default Formulario;
