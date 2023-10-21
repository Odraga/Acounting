import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRead, Delete } from "../../../../common/ConsultingDB";
import AddEditCurrency from "./AddEditCurrency";
import { confirmAlert } from "react-confirm-alert";
import Modal from "../../../common/Modal";
const ListCurrency = ({ show, toggle }) => {
  const [showAddEdit, setShowAddEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const currency = useRead("currency");

  const toggleAddEdit = (obj) => {
    setShowAddEdit(!showAddEdit);
    setSelectedItem(obj);
    console.log("VALOR", obj);
  };
  const deleteConfirm = async (table, obj) => {
    confirmAlert({
      title: "Confirm",
      message: "Seguro desea eliminar a " + obj.name + "?",
      buttons: [
        {
          label: "Sí",
          onClick: async () => {
            await Delete(table, obj.id);
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  const request = () => {
    if (currency) {
      return currency.map((currency, index) => (
        <div
          key={currency.id}
          className="row mb-2 mx-2 rounded-10 bgc-secondary"
        >
          <div className="col-1 text-center">{index + 1}</div>
          <div className="col-8">{currency.name}</div>
          <div className="col-3">
            <button className="me-1" onClick={() => toggleAddEdit(currency)}>
              EDIT
            </button>
            <button onClick={() => deleteConfirm("currency", currency)}>
              DELETE
            </button>
          </div>
        </div>
      ));
    }
  };

  return (
    <>
      {showAddEdit ? (
        <AddEditCurrency
          show={showAddEdit}
          toggle={toggleAddEdit}
          model={selectedItem}
        />
      ) : null}

      <Modal show={show} onHide={toggle}>
        <Modal.Header onButtonClose>
          <Modal.Title>LIST CURRENCY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 m-2">{request()}</div>
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

ListCurrency.propTypes = {
  show: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default ListCurrency;
