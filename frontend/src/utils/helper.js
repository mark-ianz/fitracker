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

export const capitalizeFirstChar = (string) => {
  // If parameter is not string, not array or undefined return the string
  // If parameter is array, loop and format each string
  if (Array.isArray(string)) {
    return string.map((str) => main(str));
  } else if (typeof string === "string") {
    // If parameter is string, format it with the main function
    return main(string);
  } else {
    return string;
  }

  // Main function that format the string
  function main(str) {
    const firstL = str.charAt(0).toUpperCase();
    return firstL + str.substring(1, str.length);
  }
};

export const formatPosessive = (string) => {
  // If parameter is not string, not array or undefined return the string
  // If parameter is array, loop and format each string
  if (Array.isArray(string)) {
    string.map((str) => main(str));
  } else if (typeof string === "string") {
    // If parameter is string, format it with the main function
    return main(string);
  } else {
    return string;
  }

  // Main function that format the string
  function main(str) {
    if (str.charAt(str.length - 1) === "s") {
      return str + "'";
    }

    return string + "'s";
  }
};
