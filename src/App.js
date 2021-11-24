import {Routes, Route} from 'react-router-dom'
import Words from './components/Words';
import NotFound from './components/NotFound';
import AddWord from './components/AddWord';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Words />}/>
        <Route path="/add" element={<AddWord />}/>
        <Route path="/:id" element={<AddWord />}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
