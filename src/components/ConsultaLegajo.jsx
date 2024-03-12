import React, { useState } from 'react';

const mockData = [
  {
    dni: '12345678',
    nombreCompleto: 'Juan Pérez',
    fechaNacimiento: '01/01/1980',
    numeroLegajo: '001',
  },
  {
    dni: '98765432',
    nombreCompleto: 'María Gómez',
    fechaNacimiento: '15/05/1990',
    numeroLegajo: '002',
  },
];

const ConsultaLegajo = () => {
  const [dni, setDni] = useState('');
  const [legajo, setLegajo] = useState(null);

  const buscarLegajo = () => {
    const empleado = mockData.find((emp) => emp.dni === dni);
    if (empleado) {
      setLegajo(empleado);
    } else {
      setLegajo(null);
      alert('Empleado no encontrado.');
    }
  };

  const limpiar = () => {
    setDni('');
    setLegajo(null);
  };

  return (
    <div>
      <input
        type="text"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
        placeholder="Ingrese DNI"
      />
      <button onClick={buscarLegajo}>Consultar</button>
      <button onClick={limpiar}>Limpiar</button>

      {legajo && (
        <div>
          <h2>Legajo del Empleado</h2>
          <p>Nombre Completo: {legajo.nombreCompleto}</p>
          <p>Fecha de Nacimiento: {legajo.fechaNacimiento}</p>
          <p>Número de Legajo: {legajo.numeroLegajo}</p>
        </div>
      )}
    </div>
  );
};

export default ConsultaLegajo;