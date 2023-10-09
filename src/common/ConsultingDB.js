import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./DB/db";
import { v4 as uuidv4 } from "uuid";

/**
 *QUERIES
 */

class DB {
  constructor(table, body) {
    this.table = table;
    this.body = body;
  }
  async create() {
    try {
      this.body.id = uuidv4();

      const request = await db.table(this.table).add(this.body);

      return request;
    } catch (error) {
      console.error("THAT'S A ERROR?", error);
      return null;
    }
  }
  read() {
    try {
      const request = useLiveQuery(() => db.table(this.table).toArray());

      return request;
    } catch (error) {
      console.error("THAT'S A ERROR?", error);
      return null;
    }
  }
  async update() {
    try {
      const request = await db
        .table(this.table)
        .update(this.body.id, this.body);

      return request;
    } catch (error) {
      console.error("THAT'S A ERROR?", error);
      return null;
    }
  }
  async delete(id) {
    try {
      let request = await db.table(this.table).delete(id);

      return request;
    } catch (error) {
      console.error("THAT'S A ERROR?", error);
      return null;
    }
  }
}

export default DB;
