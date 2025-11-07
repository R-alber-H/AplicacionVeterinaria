import { cliente, mascota } from "../datos/clientes";

export function validarCliente(cliente: cliente, mascota: mascota): string {
 
  if (!cliente.nombres || !cliente.apellidos || !cliente.dni || !cliente.email || !cliente.telefono) {
    return 'Por favor, completa todos los campos del cliente.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cliente.email)) {
    return 'El correo no tiene un formato válido.';
  }

  if (!mascota.nombre || !mascota.especie || !mascota.raza) {
    return 'Por favor, completa todos los campos de la mascota.';
  }
   if (mascota.edad <= 0 || isNaN(mascota.edad)) {
    return 'La edad de la mascota debe ser mayor a 0.';
  }

  return ''; 
}
