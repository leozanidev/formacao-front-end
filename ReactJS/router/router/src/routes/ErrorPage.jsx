// Hook para pegar dados do erro
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  // Configurando o HJook de Erro
  const error = useRouteError();
  // Imprimindo o Erro no Console
  console.error(error);
  return (
    <div>
      <h1>Ops!</h1>
      <p>Temos um problema!</p>
      <p>{error.statusText}</p>
      <p>{error.error.message}</p>
    </div>
  );
};

export default ErrorPage;
