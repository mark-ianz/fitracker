import { v4 as uuidv4 } from "uuid";

export const getDateNow = () => {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  const formattedDate = now.toISOString().slice(0, 16);
  return formattedDate;
};

export const generate_uuid = () => {
  return uuidv4();
};
