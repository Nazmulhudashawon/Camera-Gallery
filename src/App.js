import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Route, Switch } from 'react-router';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/shop">
              <Shop></Shop>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
