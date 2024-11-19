import css from "./ImageCard.module.css";

export default function ImageCard({
  urls: { small, regular },
  altDescription,
  onModalOpen,
}) {
  return (
    <img
      className={css.image}
      src={small}
      alt={altDescription}
      onClick={() => onModalOpen(regular, altDescription)}
    ></img>
  );
}
