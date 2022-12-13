import AboutUs from "./pages/AboutUs";
import Ourwork from "./pages/Ourwork";
import ContactUs from "./pages/ContactUs";
import Nav from "./components/Nav";
//import global styles
import GlobalStyle from "./components/GlobalStyle";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />}></Route>
        <Route path="/work" exact element={<Ourwork />}></Route>
        <Route path="/contact" exact element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
