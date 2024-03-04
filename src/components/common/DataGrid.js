import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { alpha, useTheme } from "@mui/material";

export default function DataTable({ height, width = '100%', columns, columnGroupingModel, rows }) {
  const theme = useTheme();
  return (
    <div style={{ height: height, width: width }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 15 },
          },
        }}
        pageSizeOptions={[5, 10, 15]}
        experimentalFeatures={{ columnGrouping: true }}
        columnGroupingModel={columnGroupingModel}
        sx={{
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: alpha(theme.palette.grey[500], 0.2),
          },
          "& .MuiDataGrid-row:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
          },
          // hide last border
          "&:last-child td, &:last-child th": {
            border: 0,
          },
        }}
      />
    </div>
  );
}
