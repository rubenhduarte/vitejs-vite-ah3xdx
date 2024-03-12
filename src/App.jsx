import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ConsultaLegajo from './components/ConsultaLegajo';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Consulta de Legajo de Empleado</h1>
      <ConsultaLegajo />
    </div>
  );
}

export default App
