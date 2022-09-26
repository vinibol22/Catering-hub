import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { Buffets } from "./pages/Buffets";
import { Contatos } from "./pages/Contatos";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buffets" element={<Buffets />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
    </Router>
  );
}

export default App;
