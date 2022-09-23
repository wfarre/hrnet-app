import { ReactComponent as Arrow } from "./caret-down-solid.svg";

/**
 * React component TableHeader
 * @param {*} param0
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

export default TableHeader;
