import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContactContext } from "../Contexts/ContactContext";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

export default function EditModal({ setOpen, open }) {
  const { oneContact, getOneContact, updateContact } = useContactContext();

  const [contact, setContact] = React.useState({
    name: oneContact.name,
    surname: oneContact.surname,
    image: oneContact.image,
    phoneNumber: oneContact.phoneNumber,
  });

  useEffect(() => {
    setContact(oneContact);
  }, [oneContact]);

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
    updateContact(oneContact.id, contact);
    // navigate("/");
    setContact({
      name: "",
      surname: "",
      image: "",
      phoneNumber: "",
    });

    setOpen(false);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style} onSubmit={handleSubmit}>
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
            Submit Edit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
