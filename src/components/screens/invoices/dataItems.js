import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { EditIcon, VisibilityIcon } from "../../global/IconProvider";

const ColoredBox = ({ value }) => {
  const theme = useTheme();
  return (
    <Box
      style={{
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 30,
        height: 30,
        borderRadius: 5,
      }}
    >
      <Typography variant="subtitle1" sx={{ color: "white" }}>
        {value}
      </Typography>
    </Box>
  );
};

const handleView = (id) => {
  alert(`Viewing Invoice ${id}`);
};
const handleEdit = (id) => {
  alert(`Editing Invoice ${id}`);
};

const columns = [
  {
    field: "actions",
    headerName: "Actions",

    width: 130,
    sortable: false,
    align: "flex-start",
    renderCell: (params) => (
      <Box display="flex" justifyContent="center">
        <IconButton sx={{ ml: 1 }} color="inherit" onClick={handleView}>
          <VisibilityIcon />
        </IconButton>
        <IconButton sx={{ ml: 1 }} color="inherit" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
      </Box>
    ),
  },
  { field: "id", headerName: "ID", flex: 1 },
  { field: "invoiceTo", headerName: "Invoice To", flex: 1 },
  { field: "invoiceNo", headerName: "Invoice No", flex: 1 },
  { field: "totalDue", headerName: "Total Due", flex: 1 },
  { field: "date", headerName: "Date", flex: 1, type: "date" },
  { field: "gatePassNo", headerName: "Gate Pass#", flex: 1 },
  {
    field: "itemsCount",
    headerName: "Items Count",
    align: "center",
    flex: 1,
    // show number in a color box
    renderCell: (params) => <ColoredBox value={params.value} />,
  },
  { field: "subTotal", headerName: "Sub Total", flex: 1 },
  { field: "loadingExpenses", headerName: "Loading Expenses", flex: 1 },
  { field: "carriageExpenses", headerName: "Carriage Expenses", flex: 1 },
  { field: "total", headerName: "Total", flex: 1 },
];

export { columns };
