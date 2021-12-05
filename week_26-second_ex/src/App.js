import './App.css';
import Header from './components/title';
import Language from './components/languages';
import Theme from './components/themes';
import Card from './components/cards';

const languages = ["Arabic", "English", "French", "Turkish", "German", "Spanish"];
const themes = ["Fruits", "Vegerables", "Animals"]

function App() {
  return (
    <div className="App">
      <Header title="Languages FlashCards" />
      <div>
        {languages.map(el => <Language value={el} />)}
      </div>
      <Header title="Themes" />
      <div>
        {themes.map(el => <Theme name={el} quantity="20 слов" />)}
      </div>
      <Header title="Card" />
      <Card word="butterfly" transcription="ˈbʌtəflaɪ" translation="бабочка" />
    </div>
  );
}

export default App;
