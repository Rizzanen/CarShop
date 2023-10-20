import React, { useEffect, useState, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";

function AddCar(props) {
  const [open, setOpen] = React.useState(false);

  const [car, setCar] = useState({
    brand: "",
    model: "",
    color: "",
    fuel: "",
    year: "",
    price: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const inputChanged = (event) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  const addCar = () => {
    props.saveCar(car);
    setCar({
      brand: "",
      model: "",
      color: "",
      fuel: "",
      year: "",
      price: "",
    });
    handleClose();
  };

  return (
    <div>
      <Button
        className="addButton"
        variant="outlined"
        onClick={handleClickOpen}
      >
        Add car
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ textAlign: "center" }}>ADD CAR</DialogTitle>
        <DialogContent>
          <InputLabel style={{ textAlign: "center" }}>Brand</InputLabel>
          <TextField
            type="text"
            onChange={inputChanged}
            placeholder="brand"
            name="brand"
            value={car.brand}
            label="Brand"
          />
          <InputLabel style={{ textAlign: "center" }}>Model</InputLabel>
          <TextField
            type="text"
            onChange={inputChanged}
            placeholder="model"
            name="model"
            value={car.model}
            label="Model"
          />
          <InputLabel style={{ textAlign: "center" }}>Color</InputLabel>
          <TextField
            type="text"
            onChange={inputChanged}
            placeholder="color"
            name="color"
            value={car.color}
            label="Color"
          />
          <InputLabel style={{ textAlign: "center" }}>Fuel</InputLabel>
          <TextField
            type="text"
            onChange={inputChanged}
            placeholder="fuel"
            name="fuel"
            value={car.fuel}
            label="Fuel"
          />
          <InputLabel style={{ textAlign: "center" }}>Year</InputLabel>
          <TextField
            type="text"
            onChange={inputChanged}
            placeholder="year"
            name="year"
            value={car.year}
            label="Year"
          />
          <InputLabel style={{ textAlign: "center" }}>Price</InputLabel>
          <TextField
            type="text"
            onChange={inputChanged}
            placeholder="price"
            name="price"
            value={car.price}
            label="Price"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addCar}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddCar;
