import './App.css';
import Array from './components/Array'

function App() {

  const itens = ['react', 'view', 'angular']

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <Array itens={itens}/>
      <Array itens={[]}/>
    </div>
  );
}

export default App;
