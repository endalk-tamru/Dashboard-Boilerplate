import { CssBaseline, ThemeProvider } from "@mui/material";

import { ColorModeContext, useThemeMode } from "./context/ColorModeContext";
import "./App.css";

function App() {
  const [theme, colorMode] = useThemeMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>React + Vite App</h1>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
