import { Box, Button, Typography } from "@mui/material";
import React from "react";
import DataGrid from "../../common/DataGrid";
import { columns } from "./dataItems";
import { generateRandomInvoiceData } from "../../data/RandomDataGen";
import { AddBoxIcon } from "../../global/IconProvider";
import { useNavigate } from "react-router-dom";

const data = generateRandomInvoiceData(100);

const Invoice = () => {
  const navigate = useNavigate();
  const handleNewInvoiceClick = () => {
    navigate("/invoices/entry");
  };

  return (
    <Box sx={{ gap: 2, display: "flex", width: "100%", flexDirection: "column" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6">Invoice Summary</Typography>
        <Button variant="outlined" sx={{ gap: 1, display: "flex", justifyContent: "center", alignItems: "center" }} onClick={handleNewInvoiceClick}>
          <AddBoxIcon />
          <Typography variant="subtitle" sx={{ textTransform: "none", mt: 0.4 }}>
            Create Invoice
          </Typography>
        </Button>
      </Box>
      <Box sx={{ flex: 1, display: "flex" }}>
        <DataGrid height={650} columns={columns} rows={data} />
      </Box>
    </Box>
  );
};

export default Invoice;
