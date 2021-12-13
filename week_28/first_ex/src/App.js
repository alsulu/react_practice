import Card from './components/card';
import styles from './App.module.scss';
import { data } from './data/data';


function App() {
  return (
    <div className={styles.App}>
      {data.map(el => <Card key={el.id} id={el.id} price={el.price} speed={el.speed} traffic={el.traffic} />)}
    </div>
  );
}

export default App;
