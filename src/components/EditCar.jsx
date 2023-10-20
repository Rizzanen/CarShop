import React, { useEffect, useState, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import "../App.css";

function EditCar(props) {
  const [open, setOpen] = React.useState(false);
  const [link, setLink] = React.useState();
  const [car, setCar] = useState({
    brand: "",
    model: "",
    color: "",
    fuel: "",
    year: "",
    price: "",
  });

  const handleClickOpen = () => {
    fetch(props.car, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setCar({
          brand: data.brand,
          model: data.model,
          color: data.color,
          fuel: data.fuel,
          year: data.year,
          price: data.price,
        });
        setLink(data._links.self.href);
      })
      .catch((err) => {
        console.error(err);
      });

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const inputChanged = (event) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  const saveCar = () => {
    props.handleEdit(car, link);
    handleClose();
  };

  return (
    <div>
      <Button
        className="editButton"
        onClick={handleClickOpen}
        variant="outlined"
      >
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit car</DialogTitle>
        <DialogContent>
          <InputLabel>Brand</InputLabel>
          <TextField
            type="text"
            onChange={inputChanged}
            placeholder="brand"
            name="brand"
            value={car.brand}
          />
          <InputLabel>Model</InputLabel>
          <TextField
            type="text"
            onChange={inputChanged}
            placeholder="model"
            name="model"
            value={car.model}
          />
          <InputLabel>Color</InputLabel>
          <TextField
            type="text"
            onChange={inputChanged}
            placeholder="color"
            name="color"
            value={car.color}
          />
          <InputLabel>Fuel</InputLabel>
          <TextField
            type="text"
            onChange={inputChanged}
            placeholder="fuel"
            name="fuel"
            value={car.fuel}
          />
          <InputLabel>Year</InputLabel>
          <TextField
            type="text"
            onChange={inputChanged}
            placeholder="year"
            name="year"
            value={car.year}
          />
          <InputLabel>Price</InputLabel>
          <TextField
            type="text"
            onChange={inputChanged}
            placeholder="price"
            name="price"
            value={car.price}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveCar}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditCar;
