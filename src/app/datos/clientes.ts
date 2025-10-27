export interface cliente {
  id:number;
  nombres: string;
  apellidos: string;
  dni:string,
  email: string;
  telefono: string;
  mascotas:mascota[]
}

export interface mascota {
  id:number;
  nombre: string;
  especie:string,
  raza:string,
  edad:number,
  foto:string,
}

export const especies: string[] = [
  'Perro',
  'Gato',
  'Ave',
  'Reptil',
  'Roedor',
  'Pez',
  'Conejo',
  'Tortuga',
  'Otro'
];

export const clientes: cliente[] = [
  {
    id:1,
    nombres: 'Ana María',
    apellidos: 'González Ruiz',
    dni: '45678901',
    email: 'ana.gonzalez@example.com',
    telefono: '987654321',
    mascotas: [
      {
        id:1,
        nombre: 'Luna',
        especie: 'Perro',
        raza: 'Labrador Retriever',
        edad:1,
        foto: 'labrador.jpg'
      },
      {
        id:2,
        nombre: 'Milo',
        especie: 'Gato',
        raza: 'Maine Coon',
          edad:1,
        foto: 'gato.jpg'
      }
    ]
  },
  {
    id:2,
    nombres: 'Carlos Andrés',
    apellidos: 'Ramírez Soto',
    dni: '12345678',
    email: 'carlos.ramirez@example.com',
    telefono: '912345678',
    mascotas: [
      {
        id:3,
        nombre: 'Rocky',
        especie: 'Perro',
        raza: 'Bulldog Francés',
          edad:3,
        foto: 'labrador.jpg'
      }
    ]
  },
  {
    id:3,
    nombres: 'Lucía Fernanda',
    apellidos: 'Torres Mejía',
    dni: '78901234',
    email: 'lucia.torres@example.com',
    telefono: '998877665',
    mascotas: [
      {
        id:4,
        nombre: 'Kiwi',
        especie: 'Ave',
        raza: 'Perico Australiano',
          edad:10,
        foto: 'perico.jpg'
      }
    ]
  }
];

