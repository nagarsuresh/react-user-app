import { FC } from "react";
import styles from "./Modal.module.scss";

export interface ModalProps {
  title: string;
  message: string;
  callback: () => void;
  children?: React.ReactNode;
}
const Modal: FC<ModalProps> = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalBackground}></div>
      <div className={styles.modalContainer}>
        <div className={styles.modalBody}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.contents}>{props.message}</div>
          <div className={styles.footer}>
            <button className={styles.btnOk} onClick={()=> props.callback()}>Okay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
