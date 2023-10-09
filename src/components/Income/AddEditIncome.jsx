import React from "react";
import Modal from "../common/Modal";

const AddEditIncome = ({ show, toggle }) => {
  return (
    <Modal show={true} onHide={toggle}>
      <Modal.Header onButtonClose={true}>
        <Modal.Title>Tomatoes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>AGUA</span>
        <span>TOMATITO</span>
      </Modal.Body>
      <Modal.Footer>CHICHA</Modal.Footer>
    </Modal>
  );
};

export default AddEditIncome;
