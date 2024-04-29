export const formateDate = (date: string) => {
  const data = new Date(date);

  return data.toLocaleDateString();
};
