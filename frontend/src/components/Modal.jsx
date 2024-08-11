import useModalContext from "../utils/hooks/useModalContext";

const Modal = () => {
  const { isModalOpen, modalContent, closeModal } = useModalContext();
  if (!isModalOpen) return null;

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-50">
      {modalContent}
      <span
        className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-20"
        onClick={closeModal}
      ></span>
    </div>
  );
};

export default Modal;
