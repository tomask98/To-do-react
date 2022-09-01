import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function CardTareas({ tarea, EliminarTarea }) {
  return (
    <Box  >
      <h1>{tarea.titulo}</h1>
      <p>{tarea.descripcion}</p>
      <Button
        onClick={() => EliminarTarea(tarea.id)}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Eliminar tarea
      </Button>
    </Box>
  );
}

export default CardTareas;
