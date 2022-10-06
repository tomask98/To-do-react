import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
 import { useContext } from "react";
 import { TaskContext } from "../context/taskcontext";




function CardTareas({ tarea}) {
 const {EliminarTarea} = useContext(TaskContext)

  return (
  
    <Box  >
      <h1>{tarea.titulo}</h1>
      <p>{tarea.descripcion}</p>
      <Button 
        onClick={() => EliminarTarea(tarea.id)}
        variant="contained"
        startIcon={<DeleteIcon />}
      >
        Eliminar tarea
      </Button>
    </Box>
   
  );
}

export default CardTareas;
