import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import component for integration
import { API, setAuthToken } from "./config/API";
import { UserContext } from "./context/UserContext";

// import components
import LandingPage from './pages/LandingPage';
import DetailJourney from './pages/DetailJourney';
import Profile from './pages/Profile';
import Editor from './components/Editor';
import Bookmark from "./pages/Bookmark";
import Home from "./pages/Home";
import PrivateRoute from "./pages/PrivateRoute";
import NavbarAfterLogin from "./components/NavbarAfterLogin";

function App() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useContext(UserContext);
  console.log(state);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    if (state.isLogin == false && !isLoading) {
      navigate("/");
    }
  }, [state]);

  const checkUser = async () => {
    try {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      const response = await API.get("/check-auth");

      let payload = response.data.data;
      payload.token = localStorage.token;
      console.log("ini isi payload checkUser", payload)

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
      setIsLoading(false);
    } catch (error) {
      console.log("ini error check-user auth", error)
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);


  return (
    <>
      <NavbarAfterLogin />
      {/* {isLoading ? (<></>) : (
        <div className="App">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/Home" element={<Home />} />
              <Route exact path="/DetailJourney" element={<DetailJourney />} />
              <Route exact path="/Bookmark" element={<Bookmark />} />
              <Route exact path="/Profile" element={<Profile />} />
              <Route exact path="/Editor" element={<Editor />} />
            </Route>
          </Routes>
        </div>
      )} */}
    </>
  );
}

export default App;
