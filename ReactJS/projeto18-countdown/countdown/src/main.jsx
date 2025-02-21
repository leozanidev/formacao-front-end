import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Importando coisas necessárias para criação de rotas
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importando o provedor de Contexto
import { CountdownProvider } from "./context/CountdownContext.jsx";

// Importando as páginas (ROTAS)
import Home from "./routes/Home.jsx";
import Countdown from "./routes/Countdown.jsx";

// Criando estrutura de Rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/countdown",
        element: <Countdown />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountdownProvider>
      <RouterProvider router={router} />
    </CountdownProvider>
  </StrictMode>
);
