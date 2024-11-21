import { Image } from "../../services/unsplash-api";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

type Props = {
  images: Image[];
  onModalOpen: (imgUrl: string, alt: string) => void;
};
export default function ImageGallery({ images, onModalOpen }: Props) {
  return (
    <div className={css.container}>
      <ul className={css.gallery}>
        {images.map((image) => (
          <li key={image.id} className={css.galleryItem}>
            <ImageCard
              urls={image.urls}
              altDescription={image.alt_description}
              onModalOpen={onModalOpen}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
