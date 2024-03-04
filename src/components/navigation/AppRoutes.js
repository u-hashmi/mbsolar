import Layout from "./Layout";
import {
  Dashboard,
  Invoices,
  Profit,
  Sales,
  Products,
  Accounts,
  Supply,
  InvoiceEntry,
  CreateProduct,
} from "../screens";
import { createBrowserRouter } from "react-router-dom";
import {
  SpaceDashboardOutlinedIcon,
  SpaceDashboardIcon,
  ReceiptOutlinedIcon,
  ReceiptIcon,
  PaymentsOutlinedIcon,
  PaymentsIcon,
  StoreOutlinedIcon,
  StoreIcon,
  AccountBoxOutlinedIcon,
  AccountBoxRoundedIcon,
  AssessmentOutlinedIcon,
  AssessmentRoundedIcon,
  ShoppingCartIcon,
  ShoppingCartOutlinedIcon,
} from "../global/IconProvider";

const sections = [
  { label: "Account", isHeader: true },
  { label: "Dashboard", icon: <SpaceDashboardOutlinedIcon />, selectedIcon: <SpaceDashboardIcon />, path: "/" },
  { label: "Profit", icon: <AssessmentOutlinedIcon />, selectedIcon: <AssessmentRoundedIcon />, path: "/profit" },
  { label: "Invoice", icon: <ReceiptOutlinedIcon />, selectedIcon: <ReceiptIcon />, path: "/invoices" },
  { label: "Sales", icon: <PaymentsOutlinedIcon />, selectedIcon: <PaymentsIcon />, path: "/sales" },
  { label: "Configuration", isHeader: true },
  { label: "Accounts", icon: <AccountBoxOutlinedIcon />, selectedIcon: <AccountBoxRoundedIcon />, path: "/accounts" },
  { label: "Products", icon: <StoreOutlinedIcon />, selectedIcon: <StoreIcon />, path: "/products" },
  { label: "Supply", icon: <ShoppingCartOutlinedIcon />, selectedIcon: <ShoppingCartIcon />, path: "/supply" },
];

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        key: "ROOT",
        element: <Dashboard />,
      },
      {
        path: "/invoices",
        key: "INVOICE",
        element: <Invoices />,
      },
      {
        path: "/invoices/entry",
        key: "INVOICE_ENTRY",
        element: <InvoiceEntry />,
      },
      {
        path: "/profit",
        key: "PROFIT",
        element: <Profit />,
      },
      {
        path: "/sales",
        key: "SALES",
        element: <Sales />,
      },
      {
        path: "/products",
        key: "PRODUCTS",
        element: <Products />,
      },
      {
        path: "/products/entry",
        key: "PRODUCT_ENTRY",
        element: <CreateProduct />,
      },
      {
        path: "/accounts",
        key: "ACCOUNTS",
        element: <Accounts />,
      },
      {
        path: "/supply",
        key: "SUPPLY",
        element: <Supply />,
      },
    ],
  },
]);

export { router, sections };
