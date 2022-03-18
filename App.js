import './App.css';
import MeuNome from './components/MeuNome';
import Pessoa from './components/Pessoa';

function App() {
  const nome = 'Augusto';
    
  return (
    <div className="App">
      <MeuNome nome="Victor" />
      <MeuNome nome={nome} /> 
      <Pessoa 
      nome="Augusto" 
      idade="34" 
      profissao="Programador" 
      perfil="https://via.placeholder/150"
     />      
    </div>     
  )
}

export default App;
