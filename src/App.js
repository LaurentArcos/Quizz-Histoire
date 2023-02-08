import { Container } from '@mui/material';
import { Box } from '@mui/system';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FinalScreen from './pages/FinalScreen';
import NotFound from './pages/NotFound';
import Questions from './pages/Questions';
import Settings from './pages/Settings';

function App() {

  return (
    <BrowserRouter>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" element={<Settings/>}/>
            <Route path="/questions" element={<Questions/>}/>
            <Route path="/score" element={<FinalScreen/>}/>
            <Route path="/*" element={<NotFound/>}/>
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;
