/**
 * @todo UNSAFE
 * @returns `{day}/{month}/{year}`
 */
export function getCurrentDate(): string {
  const d = new Date();
  let day = d.getDate().toString();
  let month = d.getMonth().toString();
  const year = d.getFullYear().toString();

  day = day.length === 1 ? '0' + day : day;
  month = month.length === 1 ? '0' + month : month;

  return `${day}/${month}/${year}`; // UNSAFE
}