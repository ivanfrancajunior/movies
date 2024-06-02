export function formateDate(date: Date) {
  if (!date || date.toString() === "Invalid Date")
    return null;

  return new Intl.DateTimeFormat("pt-BR").format(date);
}
