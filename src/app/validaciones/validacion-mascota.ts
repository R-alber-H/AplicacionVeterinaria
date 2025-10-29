import { mascota } from "../datos/clientes";

export function validarMascota(mascota: mascota): string {
  
  if (!mascota.nombre || !mascota.especie || !mascota.raza) {
    return 'Por favor, completa todos los campos de la mascota.';
  }

  
  if (mascota.edad <= 0 || isNaN(mascota.edad)) {
    return 'La edad de la mascota debe ser mayor a 0.';
  }

  return ''; 
}
