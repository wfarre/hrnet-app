import { ReactComponent as Arrow } from "./caret-down-solid.svg";
import PropTypes from "prop-types";

/**
 * React component TableHeader
 * @param {string} id - id of the header
 * @param {string} type - type of the data of the column(string, number, date). Important for sorting.
 * @param {string} title - title of the column header
 * @param {number} clickCounter - number of click to check if we do an ascending sort or descending sort
 * @param {string} prevId - previous id to compare before the sort and adjust the clickCounter
 * @param {function} handleSort - it will pass the data to do the sorting
 * @returns TableHeader component
 */
const TableHeader = ({ id, type, title, clickCounter, prevId, handleSort }) => {
  /**
   * On click on the header, it will update the paramaters to use the sorting function
   * @param {*} e
   */
  const handleClick = (e) => {
    let counter = clickCounter;
    let id = prevId;
    let datatype = type;

    if (
      e.target.closest(".table__header__content__item").id !== prevId ||
      prevId === null
    ) {
      counter = 1;
      id = e.target.closest(".table__header__content__item").id;
      datatype = e.target.closest(".table__header__content__item").type;
    }
    if (
      e.target.closest(".table__header__content__item").id === prevId &&
      clickCounter === 1
    ) {
      counter = 2;
      datatype = e.target.closest(".table__header__content__item").type;
    }
    if (clickCounter === 2) {
      counter = 1;
      datatype = e.target.closest(".table__header__content__item").type;
    }

    handleSort(counter, id, datatype);
  };

  return (
    <li
      className="table__header__content__item"
      id={id}
      type={type}
      onClick={handleClick}
    >
      <p>{title}</p>
      <div
        className={
          clickCounter === 2 && prevId === id
            ? "icon-wrapper descending"
            : clickCounter === 0 || prevId !== id
            ? "icon-wrapper neutral"
            : "icon-wrapper "
        }
      >
        <Arrow className="icon icon--triangle" />
      </div>
    </li>
  );
};

TableHeader.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  clickCounter: PropTypes.number,
  prevId: PropTypes.string,
  handleSort: PropTypes.func,
};

export default TableHeader;
