import React, { useState } from "react";
import AddEditIncome from "./AddEditIncome";

const ListIncome = () => {
  const [showAddEdit, setShowAddEdit] = useState(false);

  const toggleAddEdit = () => {
    setShowAddEdit(!showAddEdit);
  };
  return (
    <div>
      {showAddEdit ? (
        <AddEditIncome show={showAddEdit} toggle={toggleAddEdit} />
      ) : null}
      <button onClick={toggleAddEdit}>ABRIR</button>
      ListIncome
    </div>
  );
};

export default ListIncome;
