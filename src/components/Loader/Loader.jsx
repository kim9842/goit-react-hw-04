import s from "./Loader.module.css";
import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={s.loader}>
      <BarLoader size={50} color="black" />
    </div>
  );
};

export default Loader;
