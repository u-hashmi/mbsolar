import { Box, Card, Typography, alpha, useTheme } from "@mui/material";
import React from "react";
import DataGrid from "../../common/DataGrid";
import { columns, columnGroupingModel } from "./dataItems";
import { generateRandomProfitData } from "../../data/RandomDataGen";

const data = generateRandomProfitData(100);

const SummaryCard = ({ title, unit = "pkrs", value, bgColor = alpha("#fff", 0.05) }) => {
  return (
    <Card
      variant="outlined"
      backgroundColor="primary"
      sx={{
        p: 2,
        mt: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: bgColor,
      }}
    >
      <Typography variant="caption" color={"primary"}>
        {title}
      </Typography>
      <Box sx={{ gap: 1, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
          {unit}
        </Typography>
        <Typography variant="h5">{value}</Typography>
      </Box>
    </Card>
  );
};

const Profit = () => {
  const theme = useTheme();
  return (
    <Box sx={{ gap: 2 }}>
      <Typography variant="h6">Profit Summary</Typography>
      <Box
        sx={{
          mb: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <SummaryCard title="Total Loading" value="6195.97" />
        <SummaryCard title="Total Bill" value="826130" />
        <SummaryCard title="Total Expense" value="754908" />
        <SummaryCard title="Total Profit" value="71222" />
        <SummaryCard title="Total Stock" value="253.75" bgColor={theme.palette.primary.main} />
      </Box>
      <Box>
        <DataGrid height={620} columns={columns} columnGroupingModel={columnGroupingModel} rows={data} />
      </Box>
    </Box>
  );
};

export default Profit;
