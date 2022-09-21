import { LOCAL_STORAGE_KEY } from "../contants";

export const getLocallyStoredValues = () => {
  let storedValues;
  const storedInventoryItems = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (typeof storedInventoryItems === "string") {
    storedValues = JSON.parse(storedInventoryItems);
  }
  return storedValues;
};
