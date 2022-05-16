import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Kontakt from "./pages/kantakti";
import Magazin from "./pages/magazin";
import Novosti from "./pages/novsti";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/magazin" element={<Magazin />} />
        <Route path="/novosti" element={<Novosti />} />
        <Route path="/kantakt" element={<Kontakt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
