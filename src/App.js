import './App.css';
import Page from './components/Page';
import ContextApi from './contextApi/ContextApi';
function App() {
  return (
    <div className="App">
      <ContextApi>
        <Page/>
      </ContextApi>
    </div>
  );
}

export default App;
