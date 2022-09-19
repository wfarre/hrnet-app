import { ReactComponent as Arrow } from "./caret-down-solid.svg";

const TableHeader = ({ id, type, title, clickCounter, prevId, handleSort }) => {
  const handleClick = (e) => {
    let counter = clickCounter;
    let id = prevId;
    let type = null;
    if (
      e.target.closest(".table__header__content__item").id !== prevId ||
      prevId === null ||
      clickCounter === 0
    ) {
      counter = 1;
      id = e.target.closest(".table__header__content__item").id;
      type = e.target.closest(".table__header__content__item").type;
    }
    if (
      e.target.closest(".table__header__content__item").id === prevId &&
      clickCounter === 1
    ) {
      counter = 2;
      type = e.target.closest(".table__header__content__item").type;
    }
    if (clickCounter === 2) {
      counter = 0;
      id = null;
      type = e.target.closest(".table__header__content__item").type;
    }
    handleSort(counter, id, type);
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
