import { Routes, Route } from "react-router";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Order from "./pages/Order";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/order" element={<Order />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
