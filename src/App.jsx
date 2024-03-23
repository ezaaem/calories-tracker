import { useEffect, useState } from "react";
import Modal from "react-modal";
import CalorieRecordEdit from "./components/edit/CaloriesRecordEdit";
import ListingSection from "./components/calorieRecordsSection/listingsection";
import { styled } from "styled-components";
import "./index.css";

const LOCAL_STORAGE_KAY = "calorieRecord";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid #ccc",
    background: "#fff",
    borderRadius: "5px",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  },
};

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [records, setRecords] = useState();
  const [nextId, setNextId] = useState(5);
  
  function save() {
    localStorage.setItem(LOCAL_STORAGE_KAY, JSON.stringify(records));
  }
  

  function loadRecords() {
    const storageRecords = localStorage.getItem(LOCAL_STORAGE_KAY);
    if (storageRecords !== null && storageRecords !== "undefined") {
      const parsedRecords = JSON.parse(storageRecords);
      setRecords(parsedRecords.map(record => ({
        ...record,
        date: new Date(record.date),
        calories: Number(record.calories),
      })));
    } else {
      setRecords([]);
    }
  }
  
  useEffect(() => {
    if (!records) {
      loadRecords();
    }else{
      save();
    }
  }, [records]);

  

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const formSubmitHandler = (record) => {
    const formattedRecord = {
      ...record,
      date: new Date(record.date),
      id:crypto.randomUUID(),
    };
    setNextId((prevId) => prevId + 1);
    setRecords((prevRecords) => [formattedRecord, ...prevRecords]);
    closeModal();
  };

  return (
    <div className="App">
      <h1 className="title">Calorie Tracker</h1>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={customStyles}
      >
        <CalorieRecordEdit
          onFormSubmit={formSubmitHandler}
          onCancel={closeModal}
        />
      </Modal>
      {records && <ListingSection allRecords={records} />}{" "}
      <button className="footer" onClick={openModal}>
        track food
      </button>
    </div>
  );
}

export default App;
