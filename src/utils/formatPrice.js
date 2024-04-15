export const formatPrice = (price) =>
  new Intl.NumberFormat('es-AR', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    style: 'currency',
    currency: 'ARS',
  }).format(price)