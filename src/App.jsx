import GetTheApp from "./components/Home/GetTheApp";
import { Routes, Route } from "react-router-dom";
// import ErrorPage from "./pages/ErrorPage";
import AddRestaurant from "./pages/AddRestaurant";

import Home from "./pages/HomePage";
// import Login from "./components/Auth/Login/Login";
// import Signup from "./components/Auth/Signup/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/get-the-app" element={<GetTheApp />} />
      <Route path="/investor-relations" element={<GetTheApp />} />
      <Route path="/add-restaurant" element={<AddRestaurant />} />

      {/* <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> */}
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
}

export default App;
