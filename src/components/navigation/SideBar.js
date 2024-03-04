import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { alpha, useTheme } from "@mui/material/styles";
import { ExitToAppIcon } from "../global/IconProvider";
import { sections } from "./AppRoutes";
import "./Sidebar.css";

const SideBar = ({ drawerWidth }) => {
  const location = useLocation();
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <List>
          <Box className="appHeader">MbSolar.crm</Box>
          {sections.map((section, index) => (
            <Box key={index}>
              {section.isHeader ? (
                <Box sx={{ display: "flex", pl: 2, gap: 2, mt: 2 }}>
                  <Typography variant="subtitle" sx={{ textTransform: "uppercase", fontWeight: "bold" }}>
                    {section.label}
                  </Typography>
                </Box>
              ) : (
                <ListItemButton
                  to={section.path}
                  button
                  selected={location.pathname === section.path}
                  sx={{
                    color: location.pathname === section.path ? theme.palette.primary.main : "",
                    backgroundColor:
                      location.pathname === section.path ? alpha(theme.palette.common.white, 0.15) : "transparent",
                    "&.Mui-selected": {
                      backgroundColor: location.pathname === section.path ? alpha(theme.palette.primary.main, 0.05) : "transparent",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{ color: location.pathname === section.path ? theme.palette.primary.main : "", mr: -2 }}
                  >
                    {location.pathname === section.path ? section.selectedIcon : section.icon}
                  </ListItemIcon>
                  <ListItemText primary={section.label} />
                </ListItemButton>
              )}
            </Box>
          ))}
        </List>
        <Box sx={{ marginTop: "auto" }}>
          <Box>
            <List>
              <ListItemButton button>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
    </ThemeProvider>
  );
};

export default SideBar;
