import Formulario from "./components/Formulario";
import Lista from "./components/Lista";


import Box from "@mui/material/Box";
function App() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          width: "90%",
          marginLeft: "5%",
          alignContent: "center",
          bgcolor: "#fafafa",
          border: "2px solid white",
          borderRadius: "20px",
          marginTop: "50px",

          alignItems: "center",
        }}
      >
        <Formulario />
      <Lista /> 
      </Box>
    </>
  );
}

export default App;
