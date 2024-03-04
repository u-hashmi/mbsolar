import { RouterProvider } from "react-router-dom";
import { router } from "./components/navigation/AppRoutes";
import React, { useEffect, useState } from "react";
import { createTheme, darkScrollbar, ThemeProvider } from "@mui/material";
import { green, yellow} from "@mui/material/colors";


export const ColorModeContext = React.createContext({
  mode: "light",
  toggleColorMode: () => {},
});

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...green,
      ...(mode === "dark"
        ? {
            main: green[500],
            secondary: green[900],
            tertiary: yellow[500],
          }
        : {
            main: green[500],
            secondary: green[900],
            tertiary: yellow[500],
          }),
    }
  },
  typography: { fontFamily: ["Gabarito"].join(",") },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
      }),
    },
  },
});

function App() {
  const [mode, setMode] = React.useState(localStorage.getItem("themeMode") || "light");
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch(`/api/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
     
  }, []);
  
  const toggleColorMode = React.useCallback(() => {
    const newMode = mode === "light" ? "dark" : "light";
    localStorage.setItem("themeMode", newMode);
    setMode(newMode);
  }, [mode]);
 
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <h1>{users}</h1>
      
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
