import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import DB from "../../../../common/ConsultingDB";
import AddEditBank from "./AddEditBank";
import { confirmAlert } from "react-confirm-alert";
import Modal from "../../../common/Modal";

const ListBanks = ({ show, toggle }) => {
  const [showAddEdit, setShowAddEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const banks = new DB("banks");

  const toggleAddEdit = (obj) => {
    setShowAddEdit(!showAddEdit);
    setSelectedItem(obj);
    console.log("VALOR", obj);
  };
  const deleteConfirm = async (obj) => {
    /*  let result = */

    confirmAlert({
      title: "Confirm",
      message: "Seguro desea eliminar a " + obj.name + "?",
      buttons: [
        {
          label: "Sí",
          onClick: async () => {
            await banks.delete(obj.id);
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <>
      {showAddEdit ? (
        <AddEditBank
          show={showAddEdit}
          toggle={toggleAddEdit}
          model={selectedItem}
        />
      ) : null}
      <Modal show={show} onHide={toggle}>
        <Modal.Header onButtonClose>
          <Modal.Title>LIST BANKS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 m-2 overflow-auto">
            {banks.read()?.map((bank, index) => (
              <div key={bank.id} className="row mb-2 rounded-10 bgc-secondary">
                <div className="col-1 text-center">{index + 1}</div>
                <div className="col-8">{bank.name}</div>
                <div className="col-3">
                  <button className="me-1" onClick={() => toggleAddEdit(bank)}>
                    EDIT
                  </button>
                  <button onClick={() => deleteConfirm(bank)}>DELETE</button>
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer className={"justify-content-end align-items-center"}>
          <div className="me-4">
            <button onClick={() => toggleAddEdit()}>New Currency</button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ListBanks.propTypes = {
  show: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default ListBanks;
