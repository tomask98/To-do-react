import CardTareas from "./CardTareas";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

function Lista({tareas, EliminarTarea}) {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
    if (tareas.length === 0) {
      return(
      <Item  sx={{ display:"flex", justifyContent:"center", maxWidth:"90%",   margin:"20px 0 20px 5% " }}>
         <h1 >No hay tareas</h1>
      </Item>
      )
      
    }

  return (
 
  
    
    <Box sx={{  width: '100%',
    display: "flex",
    alignItems:"center",
    height: "auto",
    justifyContent: "center",
    margin:"20px 0 20px 0 " 
    }}>
       <Stack spacing={3}>

      {tareas.map((tarea) => (
        <Item sx={{borderRadius:"20px"}}>
        <CardTareas key={tarea.id} tarea= {tarea}  EliminarTarea={EliminarTarea} />
        </Item>
      ))}
      </Stack>
    </Box>
    
    
  );
}

export default Lista