import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register'
import AuthProvider from './Context/AuthProvider';
import Navigation from './Pages/Shared/Navigation';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import PrivateRoute from './Pages/Login/PrirvateRoute/PrivateRoute';
import Cart from './Pages/Cart/Cart';


function App() {
  const client = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
        },
    },
});
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
            <QueryClientProvider client={client}>
                <Suspense fallback={<><div class="spinner-border text-info mt-4" role="status">
               </div> <div><span>Loading...</span></div>  </>}>
               <Shop></Shop>
             </Suspense>
</QueryClientProvider>
              
            </Route>
            <Route exact path="/">
              <Cart></Cart>
            </Route>
           
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            
            
          </Switch>
        </BrowserRouter>
        </AuthProvider>
     
    </div>
  );
}

export default App;
