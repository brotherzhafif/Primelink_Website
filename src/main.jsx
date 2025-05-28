import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      <AuthContextProvider>
        <SnackbarProvider maxSnack={4}>
          <App />
        </SnackbarProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </HelmetProvider>
);
