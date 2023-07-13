import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../utils/consts";

const contactContext = createContext();

export function useContactContext() {
  return useContext(contactContext);
}

function ContactContext({ children }) {
  const [contacts, setContacts] = useState([]);
  const [oneContact, setOneContact] = useState({
    name: "",
    surname: "",
    image: "",
    phoneNumber: "",
  });

  async function getContacts() {
    const { data } = await axios(API);
    setContacts(data);
    console.log(data);
  }
  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  async function addContact(newData) {
    await axios.post(API, newData);
  }
  async function getOneContact(id) {
    const { data } = await axios.get(`${API}/${id}`);
    setOneContact(data);
  }

  async function updateContact(id, obj) {
    await axios.patch(`${API}/${id}`, obj);
    getContacts();
  }

  const value = {
    contacts,
    getContacts,
    deleteContact,
    addContact,
    oneContact,
    getOneContact,
    updateContact,
  };
  return (
    <contactContext.Provider value={value}>{children}</contactContext.Provider>
  );
}

export default ContactContext;
