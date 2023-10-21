import Dexie from "dexie";

export const db = new Dexie("mydb");

db.version(2).stores({
  banks: "++id, name",
  bankAccounts: "++id, nro, type, currencyId, bankId, totalMoney",
  currency: "++id, name",
});
