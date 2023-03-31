import Paragraph from './Paragraph';
import Banner from './Banner';
import BoxContainer from './BoxContainer';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        <Banner
          title="ALLEL ELEKTROKONSULT AB"
          description="En kostnadseffektiv el-konsult i Stockholm med anor sedan 1968"
        />
       <BoxContainer />
        <Paragraph />
    </div>
  );
}

export default App;
