import React, { useState } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import DB from "../../../../common/ConsultingDB";

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
    <ReactModal
      isOpen={show}
      /*  onAfterOpen={afterOpenModal} */
      onRequestClose={toggle}
      /* style={customStyles} */
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <button onClick={toggle}>Close</button>
      <h2>ADD/EDIT BANKS</h2>
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
      {name ? <button onClick={save}>Add</button> : null}
    </ReactModal>
  );
};

AddEditBank.propTypes = {
  show: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default AddEditBank;
