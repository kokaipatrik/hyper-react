export const currencyFormat = (price: number): string => {
  return new Intl.NumberFormat("hu-HU", {
    currency: "HUF",
    style: "currency",
    maximumFractionDigits: 0,
  }).format(price);
};
