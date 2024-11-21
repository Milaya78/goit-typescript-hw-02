import css from "./ErrorMessage.module.css";

type Props = {
  errorMessage: string;
};
export default function ErrorMessage({ errorMessage }: Props) {
  return <p className={css.message}>{errorMessage}</p>;
}
