import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Delete from './pages/Delete';
import Update from './pages/Update';
import Add from './pages/Add';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books />} />^
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Update />} />
        <Route path="/delete/:id" element={<Delete />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
