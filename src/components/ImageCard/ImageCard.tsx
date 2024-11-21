import css from "./ImageCard.module.css";

type Props = {
  urls: { small: string; regular: string };
  altDescription: string;
  onModalOpen: (imgUrl: string, alt: string) => void;
};
export default function ImageCard({
  urls: { small, regular },
  altDescription,
  onModalOpen,
}: Props) {
  return (
    <img
      className={css.image}
      src={small}
      alt={altDescription}
      onClick={() => onModalOpen(regular, altDescription)}
    ></img>
  );
}
