import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import { GlobalStyles } from './GlobalStyles';
import Home from './Home/Home'
import Men from './Men/Men'
import Women from './Women/Women'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/men' element={<Men />}/>
        <Route path='/women' element={<Women />}/>
      </Routes>
      <GlobalStyles />
    </Router>
  );
}

export default App;
