import React, { useState } from "react";
import { routes } from "../../Routes/routes";
import ListCurrency from "./Options/Currency/ListCurrency";
import ListBanks from "./Options/Banks/ListBanks";

const Configuration = (props) => {
  const [showListCurrency, setShowListCurrency] = useState(false);
  const [showListBanks, setShowListBanks] = useState(false);

  console.log(props);

  const toggleListCurrency = () => {
    setShowListCurrency(!showListCurrency);
  };
  const toggleListBanks = () => {
    setShowListBanks(!showListBanks);
  };

  return (
    <>
      {showListCurrency ? (
        <ListCurrency show={showListCurrency} toggle={toggleListCurrency} />
      ) : null}
      {showListBanks ? (
        <ListBanks show={showListBanks} toggle={toggleListBanks} />
      ) : null}
      <div>
        <h2 className="color-secondary">Configuration</h2>
        <ul>
          <li>
            <a href="#" type="button" onClick={() => toggleListCurrency()}>
              Currency
            </a>
          </li>
          <li>
            <a href="#" type="button" onClick={() => toggleListBanks()}>
              Banks
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Configuration;
