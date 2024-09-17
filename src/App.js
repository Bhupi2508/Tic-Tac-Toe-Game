import './App.css';
import Board from './Tic-Tac-Toe/board';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Tic-Tac-Toe</h1>
        <p>Challenge a friend and see who wins!</p>
      </header>
      <main>
        <Board />
      </main>
      <footer>
        <p>Developed with ❤️ by Bhupendra Singh</p>
      </footer>
    </div>
  );
}

export default App;