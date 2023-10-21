import React, { useState } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import { Update, Create } from "../../../../common/ConsultingDB";
import Modal from "../../../common/Modal";

const AddEditCurrency = ({ show, toggle, model }) => {
  const [state, setState] = useState(
    model ? { id: model.id, name: model.name } : { id: 0, name: "" }
  );

  const save = async () => {
    try {
      console.log(model ? true : false);
      let request = model
        ? Update("currency", state)
        : Create("currency", state);

      console.log(request);

      if (request) {
        toggle();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Modal show={show} onHide={toggle} className={"z-100"}>
        <Modal.Header onButtonClose>
          <Modal.Title>ADD/EDIT CURRENCY</Modal.Title>
        </Modal.Header>

        <Modal.Body className={"align-items-center justify-content-center"}>
          <div>
            Name:
            <br />
            <input
              type="text"
              value={state.name}
              onChange={(ev) => setState({ ...state, name: ev.target.value })}
            />
            <br />
            {!state.name ? <span>Por favor, escriba un nombre!</span> : null}
            <br />
          </div>
        </Modal.Body>
        <Modal.Footer className={"justify-content-end align-items-center"}>
          <div className="me-4">
            {model ? (
              state.name ? (
                <button onClick={save}>Update</button>
              ) : null
            ) : state.name ? (
              <button onClick={save}>Add</button>
            ) : null}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

AddEditCurrency.propTypes = {
  show: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default AddEditCurrency;
