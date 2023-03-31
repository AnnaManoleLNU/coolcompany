import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
           Allel Elektrokonsult AB
        </h1>
        <h3>
        En kostnadseffektiv el-konsult i Stockholm med anor.
        </h3>
        <p>Vi har lång erfarenhet av kontrolluppdrag och elbesiktningar. Alla typer av entreprenader och även projekteringar kan vi ha kontroll över. Vi utför både förbesiktningar och slutbesiktningar och levererar enkla och tydliga protokoll. Vi kan granska fakturor och äta-arbeten, vi vet vad saker ska kosta!</p>
        <h1 style={{color:"lightblue", fontSize:"5rem"}}>Gillar du typsnittet Jonas?</h1>
      </header>
    </div>
  );
}

export default App;
