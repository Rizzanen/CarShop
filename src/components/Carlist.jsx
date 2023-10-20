import React, { useEffect, useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DeleteBtnRenderer from "./DeleteButtonRenderer.jsx";
import AddCar from "./AddCar.jsx";
import EditBtnRenderer from "./EditButtonRenderer.jsx";
import "../App.css";

function Carlist() {
  const [cars, setCars] = useState([]);

  const gridRef = useRef();

  useEffect(() => {
    fetch("http://carrestapi.herokuapp.com/cars")
      .then((response) => response.json())
      .then((data) => setCars(data._embedded.cars))
      .catch((err) => console.error(err));
  }, []);

  const fetchData = () => {
    fetch("http://carrestapi.herokuapp.com/cars")
      .then((response) => response.json())
      .then((data) => setCars(data._embedded.cars))
      .catch((err) => console.error(err));
  };

  const columns = [
    {
      width: 160,
      field: "brand",
      headerName: "Brand",
      sortable: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
      headerClass: "customHeader",
      cellClass: "customCell",
      floatingFilterComponentParams: { suppressFilterButton: true },
      menuTabs: [],
    },
    {
      width: 160,
      field: "model",
      headerName: "Model",
      sortable: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
      headerClass: "customHeader",
      cellClass: "customCell",
      floatingFilterComponentParams: { suppressFilterButton: true },
      menuTabs: [],
    },
    {
      width: 160,
      field: "color",
      headerName: "Color",
      sortable: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
      headerClass: "customHeader",
      cellClass: "customCell",
      floatingFilterComponentParams: { suppressFilterButton: true },
      menuTabs: [],
    },
    {
      width: 160,
      field: "fuel",
      headerName: "Fuel",
      sortable: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
      headerClass: "customHeader",
      cellClass: "customCell",
      floatingFilterComponentParams: { suppressFilterButton: true },
      menuTabs: [],
    },
    {
      width: 160,
      field: "year",
      headerName: "Year",
      sortable: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
      headerClass: "customHeader",
      cellClass: "customCell",
      floatingFilterComponentParams: { suppressFilterButton: true },
      menuTabs: [],
    },
    {
      width: 160,
      field: "price",
      headerName: "Price",
      sortable: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
      headerClass: "customHeader",
      cellClass: "customCell",
      floatingFilterComponentParams: { suppressFilterButton: true },
      menuTabs: [],
    },
    {
      width: 90,
      sortable: false,
      filter: false,
      headerName: "",
      field: "_links.self.href",
      cellRenderer: EditBtnRenderer,
      cellRendererParams: {
        onClick: (carUrl, car) => editCar(carUrl, car),
      },
      id: "button",
    },
    {
      width: 160,
      sortable: false,
      filter: false,
      headerName: "",
      field: "_links.self.href",
      cellRenderer: DeleteBtnRenderer,
      cellRendererParams: {
        onClick: (carUrl) => deleteCar(carUrl),
      },
    },
  ];

  const deleteCar = (carUrl) => {
    if (
      window.confirm("Are you sure you want to permanently delete this car?")
    ) {
      fetch(carUrl, { method: "DELETE" })
        .then((response) => {
          if (response.ok) {
            fetchData();
          } else {
            console.error("Failed to delete the car.");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const saveCar = (car) => {
    fetch("http://carrestapi.herokuapp.com/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car),
    })
      .then((res) => fetchData())
      .catch((err) => console.error(err));
  };

  const editCar = (car, carUrl) => {
    fetch(carUrl, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car),
    })
      .then((response) => {
        if (response.ok) {
          fetchData();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="ag-theme-material" id="aggrid">
      <AddCar saveCar={saveCar} />
      <AgGridReact
        frameworkComponents={{
          DeleteBtnRenderer: DeleteBtnRenderer,
          EditBtnRenderer: EditBtnRenderer,
        }}
        ref={gridRef}
        onGridReady={(params) => (gridRef.current = params.api)}
        rowSelection="single"
        columnDefs={columns}
        rowData={cars}
      ></AgGridReact>
    </div>
  );
}

export default Carlist;
