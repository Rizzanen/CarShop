import React from "react";
import Button from "@mui/material/Button";
import EditCar from "./EditCar.jsx";

function EditBtnRenderer(props) {
  const { value, carUrl, onClick } = props;

  const handleEdit = (car, link) => {
    onClick(car, link);
  };

  return <EditCar car={value} handleEdit={handleEdit} />;
}

export default EditBtnRenderer;
