import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Configurando o Router
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Contact from "./routes/Contact.jsx";

// Importando Página de Erro
import ErrorPage from "./routes/ErrorPage.jsx";

// Importando a Página Home para usar Componente Base
import Home from "./routes/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // Componente Base
    children: [
      { path: "/", element: <Home /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
