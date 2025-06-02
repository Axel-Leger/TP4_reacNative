const tareasData = [
  {
    id: 1,
    titulo: "Comprar víveres",
    subtareas: [
      { id: 11, titulo: "Comprar frutas", descripcion: "Manzanas, peras, plátanos", estado: "Pendiente" },
      { id: 12, titulo: "Comprar verduras", descripcion: "Lechuga, tomate, cebolla", estado: "En progreso" },
    ],
  },
  {
    id: 2,
    titulo: "Preparar la fiesta",
    subtareas: [
      { id: 21, titulo: "Enviar invitaciones", descripcion: "Enviar invitaciones por email", estado: "Completado" },
      { id: 22, titulo: "Decorar el salón", descripcion: "Globos y luces", estado: "Pendiente" },
    ],
  },
];

export default tareasData;
