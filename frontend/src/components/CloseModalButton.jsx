import useModalContext from "../utils/hooks/useModalContext";

const CloseModalButton = ({ className }) => {
  const { closeModal } = useModalContext();
  return (
    <button type="button" onClick={closeModal}>
      <img src="./close-button.png" alt="close-modal" className={`icons ${className}`} />
    </button>
  );
};

export default CloseModalButton;
