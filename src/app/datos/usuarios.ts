export interface Usuario {
  email: string;
  password: string;
}

export const Usuarios: Usuario[] = [
  {
    email: 'usuario1@veterinaria.com',
    password: '123456',
  },
  {
    email: 'usuario2@veterinaria.com',
    password: '123456',
  },
  {
    email: 'usuario3@veterinaria.com',
    password: 'password123',
  }
];