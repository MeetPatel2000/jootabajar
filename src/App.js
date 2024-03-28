import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Main from "./components/main";
import { Route, Routes } from "react-router-dom";
import NewRelease from "./components/newrelease";
import BestSeller from "./components/bestseller";
import Kids from "./components/kids";
import MenShoes from "./components/menshoes";
import WomenShoes from "./components/womenshoes";
import Signup from "./components/signup";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero /> <Main />
            </>
          }
        ></Route>
        <Route path="newrelease" element={<NewRelease />}></Route>
        <Route path="bestseller" element={<BestSeller />}></Route>
        <Route path="kids" element={<Kids />}></Route>
        <Route path="menshoes" element={<MenShoes />}></Route>
        <Route path="womenshoes" element={<WomenShoes />}></Route>
        <Route path="signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
