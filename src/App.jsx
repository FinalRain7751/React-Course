import { useState } from "react";
import Form from "./Form";
import Modal from "./Modal";
import List from "./List";
import Overlay from "./Overlay";

function App() {
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const validFormSubmitHandler = (formData) => {
    setList((prevList) => {
      formData.id = Date.now();
      return [...prevList, formData];
    });
  };

  const invalidFormSubmitHandler = (errorObject) => {
    console.log(errorObject);
    setModalData(errorObject);
    setShowModal(true);
  };
  const closeModalHandler = () => setShowModal(false);

  return (
    <div className="main flow-content">
      <Form
        onValidFormSubmit={validFormSubmitHandler}
        onInvalidFormSubmit={invalidFormSubmitHandler}
      />
      <List data={list} />
      <Modal
        onModalClose={closeModalHandler}
        isModalOpen={showModal}
        data={modalData}
      />
    </div>
  );
}

export default App;
