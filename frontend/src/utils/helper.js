export const getDateNow = () => {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  const formattedDate = now.toISOString().slice(0, 16);
  return formattedDate;
};
