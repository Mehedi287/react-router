import logo from './logo.svg';
import './App.css';
import Aboutus from './Components/About us/Aboutus';
import Home from './Components/Home/Home';
import NotFound from './Components/Not fount/NotFound';
import Friends from './Components/Friends/Friends';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Friend from './Components/Friend/Friend';
import FriendDetails from './Components/FriendDetails/FriendDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/notfound">
            <NotFound></NotFound>
          </Route>
          <Route path="/friend/:id">
            <FriendDetails></FriendDetails>
          </Route>
          <Route path="/abouy">
            <Aboutus></Aboutus>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
