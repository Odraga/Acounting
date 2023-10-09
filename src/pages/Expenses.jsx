import ListFixedExpenses from "../components/Expenses/FixedExpenses/ListFixedExpenses";
import ListVariableExpenses from "../components/Expenses/VariableExpenses/ListVariableExpenses";

const Expenses = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <ListFixedExpenses />
        </div>
        <div className="col-6">
          <ListVariableExpenses />
        </div>
      </div>
    </>
  );
};

export default Expenses;
