import { Route, Routes } from "react-router-dom";

// import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Show from "./pages/Show";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product/:id" element={<Show/>} />
      <Route path="/search/" element={<Search/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
