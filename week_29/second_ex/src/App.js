import Header from './components/header';
import Footer from './components/footer';
import Table from './components/table';
import SelectedCard from './components/selectedCard'
import 'normalize.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Table />
        <SelectedCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
