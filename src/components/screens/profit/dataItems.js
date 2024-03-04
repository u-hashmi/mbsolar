
const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "customerName", headerName: "Customer Name", width: 120 },
    { field: "loadingDriver", headerName: "Loading Driver", width: 120 },
    { field: "date", headerName: "Date", width: 100, type: "date" },
    { field: "productId", headerName: "Product Id", flex: 1},
    { field: "rft", headerName: "RFT", flex: 1 },
    { field: "pPU", headerName: "P/P.U", flex: 1 },
    { field: "sPU", headerName: "S/P.U", flex: 1 },
    { field: "loading", headerName: "Loading", flex: 1 },    
    { field: "qSt", headerName: "Q.St", flex: 1 },
    { field: "qS", headerName: "Q.S", flex: 1 },
    { field: "carriage", headerName: "Carriage", flex: 1 },
    { field: "tBill", headerName: "T.Bill", flex: 1 },
    { field: "expense", headerName: "Expense", flex: 1 },
    { field: "profit", headerName: "Profit", flex: 1 },
    { field: "tStock", headerName: "T.Stock", flex: 1,headerClassName: "tStockGreenHeader", cls: "tStock" }
  ];
  
  const columnGroupingModel = [
    
    {
      groupId: "1-1/2 x 1-1/2 Pipes",
      children: [
        { field: "productId",},
        { field: "rft"},
        { field: "pPU" },
        { field: "sPU"},
        { field: "loading"},
        { field: "qSt"},
        { field: "qS"},
        { field: "carriage"},
        { field: "tBill"}
      ]
    }    
  ];

    export { columns, columnGroupingModel }