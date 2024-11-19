import css from "./App.module.css";
import fetchImages from "../../js/unsplash-api";
import { useState, useEffect } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  useEffect(() => {
    async function fetchImagesHandler() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImages(query, page);
        const results = data.results;
        if (page === 1) {
          if (results.length === 0) {
            toast("There is no results with this search query", {
              icon: "🙈",
              position: "top-right",
              duration: 4000,
            });
            return;
          }
          toast.success(`Hooray! We've found ${data.total} images!`, {
            position: "top-right",
            duration: 4000,
          });
        }
        setIsLastPage(page >= data.total_pages);
        setImages((prevData) => [...prevData, ...results]);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
        toast.error(error.message, { position: "top-right", duration: 4000 });
      } finally {
        setLoading(false);
      }
    }
    if (query) {
      fetchImagesHandler();
    }
  }, [query, page]);

  useEffect(() => {
    if (isLastPage) {
      toast.success("You've seen it all!", {
        position: "top-right",
        duration: 4000,
      });
    }
  }, [isLastPage]);

  function onSubmitReset() {
    setPage(1);
    setQuery("");
    setImages([]);
  }

  function pageIncrement() {
    setPage((prevData) => prevData + 1);
  }

  function openModal(imageUrl, alt) {
    setModalIsOpen(true);
    setModalImage(imageUrl);
    setModalAlt(alt);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className={css.container}>
      <Toaster />
      <SearchBar reset={onSubmitReset} setQuery={setQuery} />
      {error ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        images.length > 0 && (
          <>
            <ImageGallery images={images} onModalOpen={openModal} />
            {!isLastPage && <LoadMoreBtn loadMoreImages={pageIncrement} />}
          </>
        )
      )}
      {loading && <Loader />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        modalImage={modalImage}
        modalAlt={modalAlt}
      />
    </div>
  );
}

export default App;
