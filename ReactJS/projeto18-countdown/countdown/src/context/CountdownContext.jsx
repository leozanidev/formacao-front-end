import React, { useState } from "react";

const CountdownContext = React.createContext(null);

// Criando o provedor do contexto usando children para encapsular os elemntos no contexto
const CountdownProvider = ({ children }) => {
  const [event, setEvent] = useState(null);

  return (
    <CountdownContext.Provider value={{ event, setEvent }}>
      {children}
    </CountdownContext.Provider>
  );
};

export { CountdownContext, CountdownProvider };
