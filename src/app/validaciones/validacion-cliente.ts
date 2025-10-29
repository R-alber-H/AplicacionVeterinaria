export function validarCliente(cliente: any, mascota: any): string {
 
  if (!cliente.nombres || !cliente.apellidos || !cliente.dni || !cliente.email || !cliente.telefono) {
    return 'Por favor, completa todos los campos del cliente.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cliente.email)) {
    return 'El correo no tiene un formato válido.';
  }

  if (!mascota.nombre || !mascota.especie || !mascota.raza || mascota.edad <= 0) {
    return 'Por favor, completa todos los campos de la mascota.';
  }

  return ''; 
}
