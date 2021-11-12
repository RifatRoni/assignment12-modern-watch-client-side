import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Products from './pages/Products/Products/Products';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import OrderNow from './pages/OrderNow/OrderNow';

function App() {
  return (
    <div>
     <AuthProvider>
        <Router>
          <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
              <Home></Home>
              </Route>
              <Route path="/products">
                <Products></Products>
              </Route>
              <Route path="/product-details">
                <ProductDetails></ProductDetails>
              </Route>
              <PrivateRoute path="/order-now">
                <OrderNow></OrderNow>
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <Dashboard/>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route exact path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
