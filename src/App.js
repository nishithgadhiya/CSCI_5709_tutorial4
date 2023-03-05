import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllProfiles from "./pages/AllProfiles";
import UserProfile from "./pages/UserProfile";
import { ToastContainer } from "react-toastify";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/allUser" element={<AllProfiles />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
