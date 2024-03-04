import { Badge, Box, Divider, IconButton } from "@mui/material";
import React from "react";
import { SearchIcon, NotificationsIcon, LightMode, DarkMode } from "../global/IconProvider";
import { Search, SearchIconWrapper, StyledInputBase } from "../global/CustomComponents";
import UserConfig from "./UserConfig";

const HeaderBar = ({ theme, toggleColorMode }) => {
  
  const [invisible, setInvisible] = React.useState(false);
  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "background.default",
        color: "text.primary",
        m: 0,
        top: 0,
        p: 1.5,
        borderBottom: 1,
        borderColor: "divider",
        position: "sticky",
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
        </Search>
      </Box>

      <Box sx={{ textTransform: "capitalize", flexDirection: "row", display: "flex", gap: 2 }}>
        <Box>
          <IconButton sx={{ ml: 1 }} color="inherit" onClick={handleBadgeVisibility}>
            <Badge color={"warning"} variant="dot" invisible={invisible}>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box>
          <UserConfig />
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderBar;
