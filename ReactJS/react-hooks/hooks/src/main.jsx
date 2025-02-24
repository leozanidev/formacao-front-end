import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Importando Componentes
import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";

// Configurando o Router
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// Importando o contexto
import { HookUseContext } from "./components/HookUseContext.jsx";

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
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Dessa forma o contexto esta sendo passado entre os elementos das páginas */}
    <HookUseContext>
      <RouterProvider router={router} />
    </HookUseContext>
  </StrictMode>
);
