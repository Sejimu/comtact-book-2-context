import { Grid, IconButton } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { useContactContext } from "../Contexts/ContactContext";

function ContactItem({ item, setOpen }) {
  const { deleteContact, getOneContact } = useContactContext();

  function handleEdit(e) {
    setOpen(true);
    getOneContact(item.id);
  }

  return (
    <Grid item xs={12} md={4} lg={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="240"
          image="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name} {item.surname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.phoneNumber}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={(e) => deleteContact(item.id)}>
            <IconButton color="error">
              <DeleteOutlinedIcon />
            </IconButton>
          </Button>
          <Button size="small" onClick={handleEdit}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ContactItem;
