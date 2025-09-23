import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import App from "./App.jsx";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  fontFamily: "'Orbitron'",
  lineHeights: 1.5,
  components: {
    Text: {
      defaultProps: {
        style: { letterSpacing: "0.05em" },
      },
    },
    Title: {
      defaultProps: {
        style: { letterSpacing: "0.05em" },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
);
