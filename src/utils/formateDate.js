/**
 * change the date to an array to be able sort it after
 * @param {string} date
 * @returns array
 */
export function formateDate(date) {
  const dateArray = date.split("/");
  const mynewarray = [];
  for (let i = dateArray.length; i > 0; i--) {
    mynewarray.push(dateArray[i]);
  }
  return mynewarray;
}
