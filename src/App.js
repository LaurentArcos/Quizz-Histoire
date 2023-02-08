import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FinalScreen from './pages/FinalScreen';
import NotFound from './pages/NotFound';
import Questions from './pages/Questions';
import Settings from './pages/Settings';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Settings/>}/>
        <Route path="/questions" element={<Questions/>}/>
        <Route path="/score" element={<FinalScreen/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
