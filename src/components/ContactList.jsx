import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useContactContext } from "../Contexts/ContactContext";
import ContactItem from "./ContactItem";
import EditModal from "./EditModal";

function ContactList() {
  const { contacts, getContacts } = useContactContext();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getContacts();
    console.log(contacts);
  }, []);

  return (
    <div>
      <Typography sx={{ my: 4 }} variant="h3" component="h1">
        Contact Book
      </Typography>
      <Grid container spacing={2}>
        {contacts.length > 0 ? (
          contacts.map((item) => (
            <ContactItem key={item.id} item={item} setOpen={setOpen} />
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </Grid>
      <EditModal setOpen={setOpen} open={open} />
    </div>
  );
}

export default ContactList;
