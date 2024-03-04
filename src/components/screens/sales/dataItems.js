const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "customerName", headerName: "Customer Name", width: 120 },
    { field: "loadingDriver", headerName: "Loading Driver", width: 120 },
    { field: "gatePassNo", headerName: "Gate Pass No", width: 120 },
    { field: "invoiceNo", headerName: "Invoice No", width: 80 },
    { field: "invoiceDate", headerName: "Invoice Date", width: 100, type: "date" },
    { field: "productId", headerName: "Product Id", width: 90 },
    { field: "size", headerName: "Size", flex: 1 },
    { field: "wKg", headerName: "Weight/Kg", width: 90 },
    { field: "tw", headerName: "T.W", flex: 1 },
    { field: "rft", headerName: "RFT", flex: 1 },
    { field: "qSt", headerName: "Q.St", flex: 1 },
    { field: "qS", headerName: "Q.S", flex: 1 },
    { field: "qLeft", headerName: "Q.Left", flex: 1 },
    { field: "pipesqLeft", headerName: "Q.Left", flex: 1 },
    { field: "pipesqSt", headerName: "Q.St", flex: 1 },
    { field: "pipesqS", headerName: "Q.S", flex: 1 },
    { field: "channelsqLeft", headerName: "Q.Left", flex: 1 },
    { field: "channelsqSt", headerName: "Q.St", flex: 1 },
    { field: "channelsqS", headerName: "Q.S", flex: 1 },
    { field: "basePlatesqLeft", headerName: "Q.Left", flex: 1 },
    { field: "basePlatesqSt", headerName: "Q.St", flex: 1 },
    { field: "basePlatesqS", headerName: "Q.S", flex: 1 },
    { field: "enamalqLeft", headerName: "Q.Left", flex: 1 },
    { field: "enamalqSt", headerName: "Q.St", flex: 1 },
    { field: "enamalqS", headerName: "Q.S", flex: 1 },
  ];
  
  const columnGroupingModel = [
    {
      groupId: "Garders",
      children: [
        { field: "productId" },
        { field: "size" },
        { field: "wKg" },
        { field: "tw" },
        { field: "rft" },
        { field: "qSt" },
        { field: "qS" },
        { field: "qLeft" },
      ],
    },
    {
      groupId: "1-1/2 x 1-1/2 Pipes",
      children: [{field: "pipesqLeft"}, {field: "pipesqSt"}, {field: "pipesqS"}]
    },
    {
      groupId: "Channels 137-1/2",
      children: [{field: "channelsqLeft"}, {field: "channelsqSt"}, {field: "channelsqS"}]
    },
    {
      groupId: "Base Plates",
      children: [{field: "basePlatesqLeft"}, {field: "basePlatesqSt"}, {field: "basePlatesqS"}]
    },
    {
      groupId: "Enamal",
      children: [{field: "enamalqLeft"}, {field: "enamalqSt"}, {field: "enamalqS"}]
    }
  ];

    export { columns, columnGroupingModel }