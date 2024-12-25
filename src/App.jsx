import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignInPage from "./components/SignIn";
import { useUser } from "@clerk/clerk-react";
import FeedPage from "./components/FeedPage";

function App() {
  const { user } = useUser();
  return (
    <>
      <Routes>
        <Route path="/" element={user ? <Navigate to={"/feed"} /> : <Home />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </>
  );
}

export default App;
