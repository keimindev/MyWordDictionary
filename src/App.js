import {Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux';
import Words from './components/Words';
import NotFound from './components/NotFound';
import AddWord from './components/AddWord';
import Spinner from './components/Spinner';

function App() {
  const is_loaded = useSelector(state => state.reducer.is_loaded);
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Words />}/>
        <Route path="/add" element={<AddWord />}/>
        <Route path="/:id/edit" element={<AddWord />}/>
        <Route element={<NotFound/>}/>
      </Routes>
      {!is_loaded && <Spinner/>}
    </div>
    </>
  );
}

export default App;
