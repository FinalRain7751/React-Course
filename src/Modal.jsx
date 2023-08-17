import { Fragment, useEffect } from "react";
import { createPortal } from "react-dom";
import Overlay from "./Overlay";

export default function Modal(props) {
  const closeModal = () => {
    window.removeEventListener("keydown", onEscapePress);
    props.onModalClose();
  };

  const onEscapePress = (e) => {
    e.preventDefault();
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    if (props.isModalOpen) window.addEventListener("keydown", onEscapePress);
  }, [props.isModalOpen]);

  console.log(props.data);
  return (
    props.isModalOpen &&
    createPortal(
      <Fragment>
        <div className="modal">
          <div className="modal__header">
            <h4>{props.data.title}</h4>
          </div>
          <div className="modal__message">
            <p>{props.data.message}</p>
          </div>
          <div className="modal__close">
            <button onClick={closeModal}>Okay</button>
          </div>
        </div>
        <Overlay isModalOpen={props.isModalOpen} />
      </Fragment>,
      document.querySelector("#modalOverlay")
    )
  );
}
