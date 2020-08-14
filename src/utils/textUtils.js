export const formatMoneyValue = (value) => {
  if (!value) return '';
  value = typeof value === 'string' ? +value : value;
  return value.toLocaleString('en');
};

export const toTitleCase = (str) => str ? `${str[0].toUpperCase()}${str.slice(1)}` : '';

export const capitalize = (str) => {
  if (!str) return;
  const splitted = str.split(' ');
  return splitted
    .map(el => toTitleCase(el))
    .join(' ');
};