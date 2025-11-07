#  AplicacionVeterinaria

## Contexto del Proyecto

Una clínica veterinaria en crecimiento ha identificado que su proceso de atención es lento e ineficiente:  
los clientes deben llamar para agendar citas, no existe un control digital de los horarios disponibles  
y se carece de un historial de las mascotas atendidas, lo que ha generado múltiples quejas y pérdida de citas.

Como solución, se ha desarrollado **AplicacionVeterinaria**, una aplicación web que permite digitalizar  
y optimizar los procesos de registro, gestión de clientes y programación de citas.

---

## Objetivos

- Registrar nuevas mascotas y sus dueños.  
- Agendar y visualizar citas disponibles en un calendario interactivo.  
- Consultar el historial de atención de cada cliente.  

---

## Caracteristicas Principales

### Autenticacion
- Página de **inicio de sesión** con validación básica de credenciales.  
- Redirección automática a la página principal tras iniciar sesión.  

### Modulo de Clientes
- Registro de **clientes** y **mascotas asociadas**.  
- Visualización de todos los clientes registrados en una tabla dinámica.  

### Modulo de Citas
- Calendario dinámico con vistas **mensual, semanal y diaria**.  
- Integrado con **Angular Material** y **angular-calendar**.  
- Permite **crear nuevas citas** mediante un **modal interactivo**.  
- Validación de horarios para evitar solapamientos.  

### Modulo de Historial
- Consulta del **historial completo de citas registradas**.  
- Visualización del cliente, la mascota y la descripción de la cita.  

---

##  Tecnologías Utilizadas

- **Angular** – Framework principal.  
- **Angular Material** – Componentes visuales y calendario.  
- **TypeScript** – Lenguaje de programación.  
- **HTML5 / CSS3 / Bootstrap** – Interfaz y diseño responsive.  
- **SweetAlert2** – Alertas y notificaciones interactivas.  

---

##  Instalación y Ejecución

Para ejecutar la aplicación localmente, sigue los siguientes pasos:

## Clonar el repositorio
git clone https://github.com/R-alber-H/AplicacionVeterinaria.git

# Instalar dependencias necesarias
npm install

# 4Iniciar el servidor de desarrollo
ng serve

#  Abrir el navegador en
http://localhost:4200
