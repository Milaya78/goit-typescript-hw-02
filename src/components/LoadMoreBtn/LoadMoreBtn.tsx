import { FiChevronsDown } from "react-icons/fi";
import css from "./LoadMoreBtn.module.css";

type Props = {
  loadMoreImages: () => void;
};
export default function LoadMoreBtn({ loadMoreImages }: Props) {
  return (
    <button className={css.button} onClick={loadMoreImages}>
      <FiChevronsDown />
      Load more
    </button>
  );
}
