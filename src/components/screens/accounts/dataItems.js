const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "date", headerName: "Date", flex: 1, type: "date"},
    { field: "invoiceNo", headerName: "Invoice No", flex: 1 },
    { field: "totalAmount", headerName: "Total Amount", flex: 1 },
    { field: "paidAmount", headerName: "Paid Amount", flex: 1 },
    { field: "dateOfPayment", headerName: "Date of Payment", flex: 1, type: "date"},
    { field: "dueAmount", headerName: "Due Amount", flex: 1 },
    { field: "paidTo", headerName: "Paid To", flex: 1 },
    { field: "remainingBalance", headerName: "Remaining Balance", flex: 1 }
  ];
  
   export { columns }