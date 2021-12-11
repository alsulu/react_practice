import styles from './App.module.scss';
import Header from './components/header';
import Title from './components/title';
import Card from './components/cards';
import Footer from './components/footer';
import Table from './components/table';
import { data } from './data/data'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Title title="Темы" />
        <Table />
        <Title title="Карточки" />
        <div className={styles.cards_container}>
          {data.map(word =>
            <Card word={word.english} transcription={word.transcription} translation={word.russian} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
