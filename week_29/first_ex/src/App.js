import './App.css';
import CommentForm from './components/commentForm'

function App() {
  const handleClick = () => {
    
  }
  return (
    <div className="App">
      <h2>Все комментарии</h2>
      <CommentForm onClick={handleClick} />
    </div>
  );
}

export default App;
