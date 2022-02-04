import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Write from "./pages/Write/Write";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import SinglePage from "./pages/SinglePagePost/SinglePage";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"> <Homepage /> </Route>
        <Route path="/login"> {user ? <Homepage /> : <Login />} </Route>
        <Route path="/register"> {user ? <Homepage /> : <Register />} </Route>
        <Route path="/write"> {user ? <Write /> : <Register />} </Route>
        <Route path="/post/:postId"> <SinglePage /> </Route>
      </Switch>
    </Router>
  );
}

export default App;

    // <div className="App">
    //   <Navbar />
    //   {/* <Login /> */}
    //   <Register />
    //   {/* <Write /> */}
    //   {/* <Homepage /> */}
    // </div>
