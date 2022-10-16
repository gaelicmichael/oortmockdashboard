import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthenticationProvider } from "./hooks/AuthenticationContext";

import App from "./App";

const initialAuthState = {
  loggedIn: false,
  logFeedback: '',
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <AuthenticationProvider initialState={initialAuthState}>
        <App />
      </AuthenticationProvider>
    </BrowserRouter>
  </StrictMode>
);
