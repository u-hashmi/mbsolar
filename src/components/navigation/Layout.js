import { Box, CssBaseline, useTheme } from "@mui/material";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import React from "react";

import { ColorModeContext } from "../../App";
import HeaderBar from "./HeaderBar";

const drawerWidth = 240;

const Layout = () => {
  const theme = useTheme();
  const { toggleColorMode } = React.useContext(ColorModeContext);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <SideBar drawerWidth={drawerWidth} />
      </Box>
      <Box sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <HeaderBar theme={theme} toggleColorMode={toggleColorMode} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
