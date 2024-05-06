import { getContacts } from "./contacts";

export const apiUrl = "http://example.com/api";

export const getContactsNames = () => {
  return getContacts().map((contact) => contact.name);
};
