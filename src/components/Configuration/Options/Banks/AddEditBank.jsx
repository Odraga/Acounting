import React, { useState } from "react";
import PropTypes from "prop-types";
import DB from "../../../../common/ConsultingDB";
import Modal from "../../../common/Modal";

const AddEditBank = ({ show, toggle, model }) => {
  const [name, setName] = useState(model ? model.name : "");

  const save = async () => {
    try {
      let body = model
        ? model
        : {
            name: name,
          };

      let currency = new DB("banks", body);

      body.name = name;
      console.log(body);

      let request = model ? await currency.update() : await currency.create();

      if (request) {
        toggle();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal show={show} onHide={toggle} className={"z-100"}>
      <Modal.Header onButtonClose>
        <Modal.Title>ADD/EDIT BANK</Modal.Title>
      </Modal.Header>

      <Modal.Body className={"align-items-center justify-content-center"}>
        <div>
          Name:
          <br />
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <br />
          {!name ? <span>Por favor, escriba un nombre!</span> : null}
          <br />
        </div>
      </Modal.Body>
      <Modal.Footer className={"justify-content-end align-items-center"}>
        <div className="me-4">
          {model ? (
            name ? (
              <button onClick={save}>Update</button>
            ) : null
          ) : name ? (
            <button onClick={save}>Add</button>
          ) : null}
        </div>
      </Modal.Footer>
    </Modal>
  );
};

AddEditBank.propTypes = {
  show: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default AddEditBank;
