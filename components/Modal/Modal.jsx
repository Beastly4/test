import Modal from "react-modal";
import styles from "./styles.module.scss";

Modal.setAppElement("#__next");

const MapModal = ({ isOpen, modalData, willClose }) => {
  return (
    <div className={styles.modalWrapper}>
      <Modal
        className={`${styles.modal} ${willClose ? styles.close : ""} `}
        overlayClassName={styles.overlay}
        contentLabel="modal"
        isOpen={isOpen}
        style={{
          content: {
            position: "absolute",
            top: `${modalData?.y ? modalData?.y - 4 : 0}px`,
            left: `${modalData?.x ? modalData?.x - 420 : 0}px`,
          },
        }}
      >
        <p className={styles.country}>{modalData?.country}</p>
        <p className={styles.description}>{modalData?.description}</p>
      </Modal>
    </div>
  );
};

export default MapModal;
