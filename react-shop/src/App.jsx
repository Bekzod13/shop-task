import { Route, Routes } from "react-router-dom";

// import components
import Navbar from "./components/Navbar";

// import pages
import Home from "./pages/Home";
import Show from "./pages/Show";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product/:id" element={<Show/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    </>
  )
}

export default App;
