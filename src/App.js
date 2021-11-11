import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import AuthProvider from './context/AuthProvider';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import ProductDetail from './Components/Home/Products/ProductDetail';
import MyOrders from './Components/MyOrders/MyOrders';
import AllProducts from './Components/AllProducts/AllProducts';
import ManageAllOrders from './Components/Dashboard/Admin/ManageAllOrders';
import UpdateStatus from './Components/Dashboard/Admin/UpdateStatus';
import AddNewProduct from './Components/Dashboard/Admin/AddNewProduct';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/all-products">
              <AllProducts></AllProducts>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute path="/product-detail/:id">
              <ProductDetail></ProductDetail>
            </PrivateRoute>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>

            <Route path="/manage-all-orders">
              <ManageAllOrders></ManageAllOrders>
            </Route>

            <Route path="/order/update/:id">
              <UpdateStatus></UpdateStatus>
            </Route>

            <Route path="/add-new-product">
              <AddNewProduct></AddNewProduct>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
