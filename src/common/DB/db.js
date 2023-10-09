import Dexie from "dexie";

export const db = new Dexie("mydb");

db.version(1).stores({
  banks: "++id, name",
  currency: "++id, name",
});
