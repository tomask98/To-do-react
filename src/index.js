import React from "react";
import ReactDom from "react-dom/client";
// import { Lista } from "./Lista";
// import { Formulario } from "./Formulario";
import App from "./App.js";
import { TaskContextprovider } from "./context/taskcontext";


const root = ReactDom.createRoot(document.getElementById("root"));




root.render(

  
  
  <TaskContextprovider>
  <App />
  </TaskContextprovider>
  
  
);
