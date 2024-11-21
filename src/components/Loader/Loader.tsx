import ContentLoader from "react-content-loader";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <ContentLoader
      viewBox="0 0 1200 812"
      height={812}
      width={1200}
      className={css.loader}
    >
      <rect x="0" y="0" rx="5" ry="5" width="389" height="260" />
      <rect x="405" y="0" rx="5" ry="5" width="389" height="260" />
      <rect x="810" y="0" rx="5" ry="5" width="389" height="260" />
      <rect x="0" y="276" rx="5" ry="5" width="389" height="260" />
      <rect x="405" y="276" rx="5" ry="5" width="389" height="260" />
      <rect x="810" y="276" rx="5" ry="5" width="389" height="260" />
      <rect x="0" y="552" rx="5" ry="5" width="389" height="260" />
      <rect x="405" y="552" rx="5" ry="5" width="389" height="260" />
      <rect x="810" y="552" rx="5" ry="5" width="389" height="260" />
    </ContentLoader>
  );
}
