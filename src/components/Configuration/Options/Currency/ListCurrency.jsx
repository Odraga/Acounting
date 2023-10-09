import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import DB from "../../../../common/ConsultingDB";
import AddEditCurrency from "./AddEditCurrency";
import { confirmAlert } from "react-confirm-alert";
const ListCurrency = ({ show, toggle }) => {
  const [showAddEdit, setShowAddEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const currency = new DB("currency");

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
            await currency.delete(obj.id);
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
        <AddEditCurrency
          show={showAddEdit}
          toggle={toggleAddEdit}
          model={selectedItem}
        />
      ) : null}
      <ReactModal
        isOpen={show}
        onRequestClose={toggle}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="d-flex w-100">
          <div className="row">
            <div className="col-11">
              <h2>LIST CURRENCY</h2>
            </div>
            <div className="col-1">
              <button onClick={toggle} className="me-2">
                Close
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex h-75">
          <div>
            {currency.read()?.map((currency, index) => (
              <div
                key={currency.id}
                className="row mb-2 rounded-10 bgc-secondary"
              >
                {console.log(currency)}
                <div className="col-1 text-center">{index + 1}</div>
                <div className="col-8">{currency.name}</div>
                <div className="col-3">
                  <button onClick={() => toggleAddEdit(currency)}>EDIT</button>
                  <button onClick={() => deleteConfirm(currency)}>
                    DELETE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex line-up p-2">
          <button onClick={() => toggleAddEdit()}>ADD</button>
        </div>
      </ReactModal>
    </>
  );
};

ListCurrency.propTypes = {
  show: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default ListCurrency;
