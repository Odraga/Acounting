import React, { useState } from "react";
import Modal from "../common/Modal";
import { useRead, Create, Update } from "../../common/ConsultingDB";

const AddEditBankAccount = ({ show, toggle, model }) => {
  const [state, setState] = useState(
    model && model.length > 0
      ? {
          id: model.id,
          nro: model.nro,
          type: model.type,
          currencyId: model.currencyId,
          bankId: model.bankId,
          totalMoney: model.totalMoney,
        }
      : {
          id: 0,
          nro: "",
          type: "",
          currencyId: 0,
          bankId: 0,
          totalMoney: 0,
        }
  );

  {
    console.log(model.nro);
  }
  const currency = useRead("currency");
  const bank = useRead("banks");

  console.log(model);

  const save = () => {
    try {
      let request = model
        ? Update("bankAccounts", state)
        : Create("bankAccounts", state);

      console.log(request);

      if (request) {
        toggle(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const validate = () => {
    let status = false;
  };

  const form = () => {
    if (currency && bank) {
      return (
        <div>
          <div>
            Nro:
            <br />
            <input
              type="text"
              value={state.nro}
              onChange={(ev) => {
                setState({ ...state, nro: ev.target.value });
              }}
            />
            <br />
            <br />
            {/* {true ? <span>Por favor, escriba un nombre!</span> : null} */}
          </div>
          <div>
            Tipo:
            <br />
            <select
              name="type"
              id="type"
              defaultValue={model ? model.type : "DEFAULT"}
              onClick={(obj) => setState({ ...state, type: obj.target.value })}
            >
              <option value="DEFAULT">None</option>
              <option value="Corriente">Corriente</option>
              <option value="Ahorro">Ahorro</option>
            </select>
            <br />
            <br />
            {/* {true ? <span>Por favor, escriba un nombre!</span> : null} */}
          </div>
          {console.log(currency ? model.currencyId : "DEFAULT")}
          <div>
            Moneda:
            <br />
            <select
              name="currency"
              id="currency"
              defaultValue={currency ? model.currencyId : "DEFAULT"}
              onClick={(obj) =>
                setState({ ...state, currencyId: obj.target.value })
              }
            >
              <option value="DEFAULT">None</option>
              {currency &&
                currency.map((item, index) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
            <br />
            <br />
          </div>
          <div>
            Banco:
            <br />
            <select
              name="bankId"
              id="bankId"
              defaultValue={model.bankId}
              onClick={(obj) =>
                setState({ ...state, bankId: obj.target.value })
              }
            >
              <option value="DEFAULT">None</option>
              {bank &&
                bank.map((item, index) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
            <br />
            <br />
          </div>
          <div>
            Dinero Total: {state.totalMoney}
            {/* {!name ? <span>Por favor, escriba un nombre!</span> : null} */}
            <br />
          </div>
        </div>
      );
    }
  };

  return (
    <Modal show={show} onHide={toggle}>
      <Modal.Header onButtonClose>
        <Modal.Title>Add/Edit Bank Account</Modal.Title>
      </Modal.Header>
      <Modal.Body className={"align-items-center justify-content-center"}>
        {form()}
      </Modal.Body>
      <Modal.Footer className={"align-items-center justify-content-end"}>
        {console.log(
          model
            ? state
              ? "Entro"
              : "no ENTRO"
            : state
            ? "para agregar"
            : "no agregar"
        )}
        <div className="me-4">
          <button onClick={save}>Update</button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default AddEditBankAccount;
