import React, { useState } from "react";
import { db } from "../../common/DB/db";

const DashboardOverview = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(21);
  const [status, setStatus] = useState("");

  async function addFriend() {
    try {
      // Add the new friend!
      const id = await db.friends.add({
        name,
        age,
      });

      setStatus(`Friend ${name} successfully added. Got id ${id}`);
      setName("");
      setAge(21);
    } catch (error) {
      setStatus(`Failed to add ${name}: ${error}`);
    }
  }

  return (
    <>
      <h1>WE ARE WORKING HERE!</h1>
    </>
  );
};

export default DashboardOverview;
