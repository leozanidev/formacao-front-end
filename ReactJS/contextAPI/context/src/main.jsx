import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Configurando o React Router
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// Importação de Páginas criadas
import Contact from "./routes/Contact.jsx";
// Componente Base
import Home from "./routes/Home.jsx";

// CONTEXTO MAIS COMPLEXO
import { TitleColorContextProvider } from "./context/TitleColorCOntext.jsx";

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

// 4 - Criando o Provider
import { CounterContextProvider } from "./context/CounterContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Dessa forma estamos compartilhando contexto com a aplicação */}
    <CounterContextProvider>
      <TitleColorContextProvider>
        {/* Dessa forma, todas as páginas da aplicação
      tem a possibilidade de consumir o contexto criado */}
        <RouterProvider router={router} />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </StrictMode>
);
