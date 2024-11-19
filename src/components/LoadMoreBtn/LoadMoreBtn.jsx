import { FiChevronsDown } from "react-icons/fi";
import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ loadMoreImages }) {
  return (
    <button className={css.button} onClick={loadMoreImages}>
      <FiChevronsDown />
      Load more
    </button>
  );
}
