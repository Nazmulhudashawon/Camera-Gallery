import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Route, Switch } from 'react-router';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register'
import AuthProvider from './Context/AuthProvider';
import Navigation from './Pages/Shared/Navigation';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import PrivateRoute from './Pages/Login/PrirvateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
       
      
      <BrowserRouter>
      <Navigation></Navigation>
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
            <PrivateRoute  path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            
            
          </Switch>
        </BrowserRouter>
        </AuthProvider>
     
    </div>
  );
}

export default App;
