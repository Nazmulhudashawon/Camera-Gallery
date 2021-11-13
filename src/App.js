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
import Payment from './Pages/DashBoard/Payment';


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
            <PrivateRoute exact path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route exact path="/payment">
              <Payment></Payment>
            </Route>
            
          </Switch>
        </BrowserRouter>
        </AuthProvider>
     
    </div>
  );
}

export default App;
