import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import DB from "../../../../common/ConsultingDB";
import AddEditBank from "./AddEditBank";
import { confirmAlert } from "react-confirm-alert";

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
      <ReactModal
        isOpen={show}
        /*  onAfterOpen={afterOpenModal} */
        onRequestClose={toggle}
        /* style={customStyles} */
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button onClick={toggle} className="me-2">
          Close
        </button>
        <button onClick={() => toggleAddEdit()}>ADD</button>
        <h2>LIST BANKS</h2>

        <table
          style={{ border: "1px solid black", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid black" }}>#</th>
              <th style={{ border: "1px solid black" }} className="px-2">
                NAME
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {banks.read()?.map((bank, index) => (
              <tr key={bank.id}>
                {console.log(bank)}
                <td style={{ border: "1px solid black" }} className="px-2">
                  {index + 1}
                </td>
                <td style={{ border: "1px solid black" }} className="px-2">
                  {bank.name}
                </td>
                <td>
                  <button onClick={() => toggleAddEdit(bank)}>EDIT</button>
                  <button onClick={() => deleteConfirm(bank)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ReactModal>
    </>
  );
};

ListBanks.propTypes = {
  show: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default ListBanks;
