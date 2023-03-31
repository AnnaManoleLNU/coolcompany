import Paragraph from './Paragraph';
import Banner from './Banner';
import BoxContainer from './BoxContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <Banner
          title="Allel Elektrokonsult AB"
          description="Vi utför elbesiktningar, elkontroller, elprojektering, elentreprenad och elinstallationer"
          backgroundImage= "../img/banner.jpg"
        />
        <Paragraph />
       <BoxContainer />
    </div>
  );
}

export default App;
