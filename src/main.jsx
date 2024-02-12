import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
  domain="dev-y4ynhads8n2aw8p7.us.auth0.com"
  clientId="3i1ZRiksVVSuoKaVBen1Q0QQupF7oAzN"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
    <AppProvider>
      <App />
    </AppProvider>
 </Auth0Provider>
);
