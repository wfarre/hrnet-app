import { formateDate } from "./formateDate";

const ascendingSort = (data, dataType, id) => {
  switch (dataType) {
    case "string":
      return data.sort((a, b) => a[id].localeCompare(b[id]));
    case "number":
      return data.sort((a, b) => a[id] - b[id]);
    case "date":
      return data.sort(
        (a, b) =>
          Date.parse(formateDate(a[id])) - Date.parse(formateDate(b[id]))
      );
    default:
      console.log(dataType);
      break;
  }
};

const descendingSort = (data, dataType, id) => {
  switch (dataType) {
    case "string":
      return data.sort((a, b) => b[id].localeCompare(a[id]));
    case "number":
      return data.sort((a, b) => b[id] - a[id]);
    case "date":
      return data.sort(
        (a, b) =>
          Date.parse(formateDate(b[id])) - Date.parse(formateDate(a[id]))
      );
    default:
      console.log(dataType);
      break;
  }
};

export { ascendingSort, descendingSort };
