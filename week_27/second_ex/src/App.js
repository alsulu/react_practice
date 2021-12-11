import Header from './components/header';
import CardCont from './components/card_cont';
import Footer from './components/footer';
import Table from './components/table';
import 'normalize.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Table />
        <CardCont />
      </main>
      <Footer />
    </div>
  );
}

export default App;
