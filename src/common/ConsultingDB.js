import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./DB/db";
import { v4 as uuidv4 } from "uuid";

/**
 *QUERIES
 */

export const Create = async (table, body) => {
  try {
    body.id = uuidv4();

    const request = await db.table(table).add(body);

    return request;
  } catch (error) {
    console.error("THAT'S A ERROR?", error);
    return [];
  }
};

export const useRead = (table, body, filter) => {
  try {
    let request = useLiveQuery(async () => {
      if (!filter) {
        console.log("ENTRo");
        console.log(table);
        return await db.table(table).toArray();
      } else {
        return db
          .table(table)
          .filter((item) => item.id === filter)
          .toArray();
      }
    }, [table, body, filter]);
    console.log(request);
    return request;
  } catch (error) {
    console.error("THAT'S A ERROR?", error);
    return [];
  }
};

export const Update = async (table, body) => {
  try {
    const request = await db.table(table).update(body.id, body);

    return request;
  } catch (error) {
    console.error("THAT'S A ERROR?", error);
    return [];
  }
};

export const Delete = async (table, body) => {
  try {
    console.log(table);
    console.log(body);
    let request = await db.table(table).delete(body);

    return request;
  } catch (error) {
    console.error("THAT'S A ERROR?", error);
    return [];
  }
};

const DB = () => {
  return;
};

export default DB;
