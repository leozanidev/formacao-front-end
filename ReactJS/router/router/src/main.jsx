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
// Página de Erro
import ErrorPage from "./routes/ErrorPage.jsx";
// Componente Base
import Home from "./routes/Home.jsx";
// Rota Dinâmica
import Product from "./routes/Product.jsx";
// Rotas aninhadas
import Info from "./routes/Info.jsx";
// Search Params
import Search from "./routes/Search.jsx";

// Configurando as páginas do Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // Usando Componente Base
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // Criando Rota Dinâmica
      {
        path: "products/:id",
        element: <Product />,
      },
      // Rotas Aninhadas
      {
        path: "products/:id/info",
        element: <Info />,
      },
      // Search Params
      {
        path: "search",
        element: <Search />,
      },
      // Redirecionamento
      {
        path: "teste",
        element: <Navigate to="/" />,
      },
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
