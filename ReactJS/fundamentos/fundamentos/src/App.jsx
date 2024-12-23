// Importando componentes
import './App.css'
import FirstComponent from './components/FirstComponent'
// Template Expression
import TemplateExpression from './components/TemplateExpression';
// Hierarquia de Componentes
import MyComponent from './components/MyComponent';
// Eventos com React
import Events from './components/Events';

function App() {

  return (
    <>
    {/* Coméntários em JSX são assim */}
      <h1>Fundamentos</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </>
  )
}

export default App
