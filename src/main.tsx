import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, CssVarsProvider } from "@mui/joy";

createRoot(document.getElementById("root")!).render(
  <CssVarsProvider>
    <CssBaseline />
    <App />
  </CssVarsProvider>
);
