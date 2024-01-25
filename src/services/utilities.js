export const formatPrice = (price) => {
  const formattedPrice = parseFloat(price).toFixed(2);
  const partes = formattedPrice.split('.');
  partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `$ ${partes.join('.')}`;
};
