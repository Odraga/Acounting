import React, { useEffect, useState, useLayoutEffect } from "react";
import AddEditBankAccount from "./AddEditBankAccount";
import { Delete, useRead } from "../../common/ConsultingDB";
import { confirmAlert } from "react-confirm-alert";

const ListBankAccounts = () => {
  const [showAddEdit, setShowAddEdit] = useState(false);
  const [state, setState] = useState({
    id: 0,
    nro: "",
    type: "",
    currencyId: 0,
    bankId: 0,
    totalMoney: 0,
  });

  const currency = useRead("currency");
  const bankAccounts = useRead("bankAccounts");
  const banks = useRead("banks");

  const deleteConfirm = async (table, obj) => {
    console.log(obj.id);
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
    if (currency && bankAccounts && banks) {
      return (
        <>
          {bankAccounts.map((bankAccount, index) => {
            const matchingCurrency = currency.find(
              (value) => value.id === bankAccount.currencyId
            );
            const matchingBank = banks.find(
              (value) => value.id === bankAccount.bankId
            );

            return (
              <div
                key={bankAccount.id}
                className="row mb-2 rounded-10 bgc-secondary"
              >
                <div className="col-1 d-flex align-items-center justify-content-center">
                  {index + 1}
                </div>
                <div className="col-7">
                  {bankAccount.nro} <br />
                  <small>
                    {bankAccount.type}
                    {" / "}
                    {matchingBank ? matchingBank.name : "Banco no encontrada"}
                    {" / "}
                    {matchingCurrency
                      ? matchingCurrency.name
                      : "Moneda no encontrada"}
                  </small>
                </div>
                <div className="col-4 text-center mt-1">
                  <button
                    className="me-1"
                    onClick={(e) => {
                      setState({
                        ...state,
                        id: bankAccount.id,
                        nro: bankAccount.nro,
                        type: bankAccount.type,
                        currencyId: matchingCurrency.id,
                        bankId: matchingBank.id,
                        totalMoney: bankAccount.totalMoney,
                      });
                      toggleAddEdit(e);
                    }}
                  >
                    EDIT
                  </button>
                  <button
                    onClick={() => deleteConfirm("bankAccounts", bankAccount)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })}
        </>
      );
    }
  };

  useLayoutEffect(() => {
    request();
  }, []);

  const toggleAddEdit = (e) => {
    e.stopPropagation();
    setShowAddEdit(!showAddEdit);
  };

  return (
    <div>
      {showAddEdit ? (
        <AddEditBankAccount
          show={showAddEdit}
          toggle={toggleAddEdit}
          model={state}
        />
      ) : null}
      <div className="row">
        <div className="col-8">
          <strong>LIST BANK ACCOUNTS</strong>
        </div>
        <div className="col-4">
          <button
            onClick={(e) => {
              setState({});
              toggleAddEdit(e);
            }}
          >
            New Bank Account
          </button>
        </div>

        {/* {console.log(read("currency"))} */}
        <div className="col-12">
          <div className="w-100 m-2 ">{request()}</div>
        </div>
      </div>
    </div>
  );
};

export default ListBankAccounts;
