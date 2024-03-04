function generateRandomSalesData(count) {
  const getRandomDate = () => new Date(Math.random() * new Date().getTime());
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const names = ["John Doe", "Jane Smith", "Bob Johnson", "Alice Williams", "Charlie Brown", "Eva Davis"];
  const gatePass = ["No Pass", "Pass 1", "Pass 2", "Pass 3", "Pass 4", "Pass 5"];

  const data = [];

  for (let i = 0; i < count; i++) {
    const randomRow = {
      id: getRandomNumber(1, 1000),
      customerName: names[Math.floor(Math.random() * names.length)],
      loadingDriver: names[Math.floor(Math.random() * names.length)],
      gatePassNo: gatePass[Math.floor(Math.random() * names.length)],
      invoiceNo: getRandomNumber(1, 100),
      invoiceDate: getRandomDate(),
      productId: getRandomNumber(1, 100),
      size: getRandomNumber(1, 100),
      wKg: getRandomNumber(1, 100),
      tw: getRandomNumber(1, 100),
      rft: getRandomNumber(1, 100),
      qSt: getRandomNumber(1, 100),
      qS: getRandomNumber(1, 100),
      qLeft: getRandomNumber(1, 100),
      pipesqLeft: getRandomNumber(1, 100),
      pipesqSt: getRandomNumber(1, 100),
      pipesqS: getRandomNumber(1, 100),
      channelsqLeft: getRandomNumber(1, 100),
      channelsqSt: getRandomNumber(1, 100),
      channelsqS: getRandomNumber(1, 100),
      basePlatesqLeft: getRandomNumber(1, 100),
      basePlatesqSt: getRandomNumber(1, 100),
      basePlatesqS: getRandomNumber(1, 100),
      enamalqLeft: getRandomNumber(1, 100),
      enamalqSt: getRandomNumber(1, 100),
      enamalqS: getRandomNumber(1, 100),
    };

    data.push(randomRow);
  }

  return data;
}

function generateRandomProfitData(count) {
  const getRandomDate = () => new Date(Math.random() * new Date().getTime());
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const names = ["John Doe", "Jane Smith", "Bob Johnson", "Alice Williams", "Charlie Brown", "Eva Davis"];

  const data = [];

  for (let i = 0; i < count; i++) {
    const randomRow = {
      id: getRandomNumber(1, 1000),
      customerName: names[Math.floor(Math.random() * names.length)],
      loadingDriver: names[Math.floor(Math.random() * names.length)],
      date: getRandomDate(),
      productId: getRandomNumber(1, 100),
      rft: getRandomNumber(1, 100),
      pPU: getRandomNumber(1, 100),
      sPU: getRandomNumber(1, 100),
      loading: getRandomNumber(1, 100),
      qSt: getRandomNumber(1, 100),
      qS: getRandomNumber(1, 100),
      carriage: getRandomNumber(1, 100),
      tBill: getRandomNumber(1, 100),
      expense: getRandomNumber(1, 100),
      profit: getRandomNumber(1, 100),
      tStock: getRandomNumber(1, 100),
    };

    data.push(randomRow);
  }

  return data;
}

function generateRandomAccountsData(count) {
  const getRandomDate = () => new Date(Math.random() * (new Date().getTime()));
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const names = ["John Doe", "Jane Smith", "Bob Johnson", "Alice Williams", "Charlie Brown", "Eva Davis"];

  const data = [];

  for (let i = 0; i < count; i++) {
      const randomRow = {
          id: getRandomNumber(1, 1000),
          date: getRandomDate(),
          invoiceNo: getRandomNumber(1, 100),
          totalAmount: getRandomNumber(100, 1000),
          paidAmount: getRandomNumber(1, 100),
          dateOfPayment: getRandomDate(),
          dueAmount: getRandomNumber(1, 100),
          paidTo: names[Math.floor(Math.random() * names.length)],
          remainingBalance: getRandomNumber(1, 100),
      };

      data.push(randomRow);
  }

  return data;
}

function generateRandomInventoryData(count) {
  const getRandomString = () => Math.random().toString(36).substring(7);
  const getRandomDate = () => new Date(Math.random() * (new Date().getTime()));
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const supplierNames = ["ABC Suppliers", "XYZ Company", "LMN Enterprises", "PQR Traders", "DEF Industries"];

  const data = [];

  for (let i = 0; i < count; i++) {
      const randomRow = {
          id: getRandomNumber(1, 1000),
          items: getRandomString(),
          supplierName: supplierNames[Math.floor(Math.random() * supplierNames.length)],
          date: getRandomDate(),
          productId: getRandomNumber(1000, 2000),
          size: getRandomNumber(1, 100),
          quantity: getRandomNumber(1, 50),
          weightKg: getRandomNumber(10, 100),
          totalWeight: getRandomNumber(100, 1000),
          rft: getRandomNumber(1, 10),
          percentage: getRandomNumber(1, 100),
          pricePerUnit: getRandomNumber(10, 100),
          lExp: getRandomNumber(1, 50),
          total: getRandomNumber(100, 1000),
      };

      data.push(randomRow);
  }

  return data;
}


function generateRandomInvoiceData(count) {
    const getRandomDate = () => new Date(Math.random() * (new Date().getTime()));
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const invoiceToOptions = ["Company A", "Company B", "Company C", "Customer X", "Customer Y"];

    const data = [];

    for (let i = 0; i < count; i++) {
        const randomRow = {
            id: getRandomNumber(1, 1000),
            invoiceTo: invoiceToOptions[Math.floor(Math.random() * invoiceToOptions.length)],
            invoiceNo: getRandomNumber(1000, 2000),
            totalDue: getRandomNumber(100, 1000),
            date: getRandomDate(),
            gatePassNo: `Pass ${getRandomNumber(1, 5)}`,
            itemsCount: getRandomNumber(1, 20),
            subTotal: getRandomNumber(100, 500),
            loadingExpenses: getRandomNumber(10, 100),
            carriageExpenses: getRandomNumber(10, 100),
            total: getRandomNumber(500, 1500),
        };

        data.push(randomRow);
    }

    return data;
}


export { generateRandomSalesData, generateRandomProfitData, generateRandomAccountsData, generateRandomInventoryData, generateRandomInvoiceData};
