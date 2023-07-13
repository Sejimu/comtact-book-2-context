import React, { useState } from "react";
import { useContactContext } from "../Contexts/ContactContext";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AddContact() {
  const navigate = useNavigate();
  const { addContact } = useContactContext();
  const [contact, setContact] = useState({
    name: "",
    surname: "",
    image: "",
    phoneNumber: "",
  });

  function handleChange(e) {
    if (e.target.name == "phoneNumber") {
      let obj = { ...contact, phoneNumber: Number(e.target.value) };
      setContact(obj);
    } else {
      let obj = { ...contact, [e.target.name]: e.target.value };
      setContact(obj);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !contact.name.trim() ||
      !contact.surname.trim() ||
      !contact.image.trim() ||
      !contact.phoneNumber.trim()
    ) {
      alert("fill all inputs");
      return;
    }
    addContact(contact);
    // navigate("/");
    setContact({
      name: "",
      surname: "",
      image: "",
      phoneNumber: "",
    });
  }

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", p: "5" }}
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        name="name"
        label="Name"
        value={contact.name}
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        name="surname"
        label="Surname"
        value={contact.surname}
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        name="image"
        label="Image"
        value={contact.image}
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        name="phoneNumber"
        label="Phone Number"
        value={contact.phoneNumber}
        onChange={handleChange}
      />
      <Button variant="outlined" type="submit">
        Add contact
      </Button>
    </Box>
  );
}

export default AddContact;
