import './App.css'
import Stats from './components/Stats'
import Status from './components/Health';

const App = () => {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <Stats />
      <Status />
    </div>
  );
}

export default App
