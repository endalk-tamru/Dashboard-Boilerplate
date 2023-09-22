import { createContext, useMemo, useState } from "react";
import { createTheme } from "@mui/material";

import { getDesignTokens } from "../theme/theme";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useThemeMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return [theme, colorMode];
};

// USE THIS LINK FOR REFERENCE:
// https://mui.com/material-ui/customization/dark-mode/#system-ToggleColorMode.js

// EXAMPLE OF HOW TO USE THIS IN A COMPONENT:
// import { useContext } from "react";
// import { useTheme } from "@mui/material/styles";

// function MyApp() {
//   const theme = useTheme();
//   const { toggleColorMode } = useContext(ColorModeContext);
//   return (
//     <Button onClick={toggleColorMode}>
//       {theme.palette.mode === "dark" ? "Use Light" : "Use Dark"}
//     </Button>
//   );
// }
