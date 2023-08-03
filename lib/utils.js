export const currencyFormatter = (amount) => {
    const formatter = Intl.NumberFormat("fil-PH", {
      currency: "PHP",
      style: "currency",
    });
  
    return formatter.format(amount);
  };