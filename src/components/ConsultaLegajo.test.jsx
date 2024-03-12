import { render, screen, fireEvent } from '@testing-library/react';
import ConsultaLegajo from './ConsultaLegajo';

test('consulta legajo de un empleado existente', () => {
  render(<ConsultaLegajo />);
  const inputDni = screen.getByPlaceholderText('Ingrese DNI');
  fireEvent.change(inputDni, { target: { value: '12345678' } });

  const consultarButton = screen.getByText('Consultar');
  fireEvent.click(consultarButton);

  const nombreCompleto = screen.getByText(/Nombre Completo:/i);
  expect(nombreCompleto).toBeInTheDocument();
});

test('limpiar el formulario', () => {
  render(<ConsultaLegajo />);
  const inputDni = screen.getByPlaceholderText('Ingrese DNI');
  fireEvent.change(inputDni, { target: { value: '12345678' } });

  const limpiarButton = screen.getByText('Limpiar');
  fireEvent.click(limpiarButton);

  expect(inputDni.value).toBe('');
});